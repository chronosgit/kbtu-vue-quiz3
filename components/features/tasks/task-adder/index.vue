<script setup lang="ts">
	import { useTasksStore } from '~/store/useTasksStore';
	import type { TTaskPriority } from '~/interfaces/features/TTaskPriority';

	const tasksStore = useTasksStore();

	const input = ref('');
	const priority = ref<TTaskPriority>('low');

	const addTask = () => {
		if (!input.value.length) return;

		try {
			tasksStore.addTask(input.value, priority.value);

			input.value = '';
			priority.value = 'low';
		} catch (err) {
			console.error(err);
		}
	};
</script>

<template>
	<form
		class="flex gap-2 items-center justify-between w-full"
		@submit.prevent="addTask"
	>
		<input
			v-model="input"
			type="text"
			placeholder="Add task title..."
			class="w-[60%] py-2 px-4 bg-gray-100 rounded-md"
		/>

		<select v-model="priority" class="w-[20%] bg-gray-100 py-2 px-4 rounded-md">
			<option value="high">High</option>
			<option value="medium">Medium</option>
			<option value="low">Low</option>
		</select>

		<button type="submit" class="bg-green-300 w-[20%] py-2 px-4 rounded-md">
			Add task
		</button>
	</form>
</template>
