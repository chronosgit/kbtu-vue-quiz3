<script setup lang="ts">
	import { useTasksStore } from '~/store/useTasksStore';

	const tasksStore = useTasksStore();

	const orderType = ref<'asc' | 'desc'>('asc');
</script>

<template>
	<div class="flex justify-center gap-2 items-center">
		<select v-model="orderType" class="bg-gray-100 py-2 px-4 rounded-md">
			<option value="asc">Ascending</option>
			<option value="desc">Descending</option>
		</select>

		<button
			class="py-2 px-4 bg-green-200"
			@click="tasksStore.sortTasksByPriority(orderType)"
		>
			Sort by priority
		</button>
	</div>
</template>
