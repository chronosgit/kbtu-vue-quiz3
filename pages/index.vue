<script setup lang="ts">
	import Task from '@/components/features/tasks/task/index.vue';
	import TaskAdder from '@/components/features/tasks/task-adder/index.vue';
	import TasksSorter from '@/components/features/tasks/tasks-sorter/index.vue';
	import { useTasksStore } from '~/store/useTasksStore';

	useHead({ title: 'Home page' });

	const tasksStore = useTasksStore();
</script>

<template>
	<div>
		<div class="max-w-[80%] lg:max-w-[50%] mx-auto mt-10">
			<TaskAdder />

			<TasksSorter class="mb-10" />

			<!-- Tasks -->
			<section class="grid gap-2 grid-cols-1">
				<TransitionGroup>
					<Task
						v-show="tasksStore.tasks.length"
						v-for="t in tasksStore.tasks"
						:key="t.id"
						:task="t"
					/>
				</TransitionGroup>

				<p v-show="!tasksStore.tasks.length">No tasks...</p>
			</section>
		</div>
	</div>
</template>

<style lang="css" scoped>
	.v-enter-active,
	.v-leave-active {
		transition: opacity 0.5s ease;
	}

	.v-enter-from,
	.v-leave-to {
		opacity: 0;
	}
</style>
