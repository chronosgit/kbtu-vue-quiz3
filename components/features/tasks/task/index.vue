<script setup lang="ts">
	import type ITask from '~/interfaces/features/ITask';
	import { useTasksStore } from '~/store/useTasksStore';

	const tasksStore = useTasksStore();

	const props = defineProps<{ task: ITask }>();

	const priorityStyle = computed(() => {
		switch (props.task.priority) {
			case 'high':
				return 'bg-orange-300';
			case 'medium':
				return 'bg-blue-200';
			case 'low':
				return 'bg-green-200';
			default:
				return '';
		}
	});
</script>

<template>
	<Transition name="task">
		<div class="flex items-center justify-between gap-1">
			<div class="flex items-center gap-2">
				<p
					class="font-medium"
					:class="{ 'line-through': props.task.isCompleted }"
				>
					{{ props.task.title }}
				</p>

				<p
					class="uppercase text-sm py-1 px-2 font-bold rounded-md"
					:class="[priorityStyle]"
				>
					{{ props.task.priority }}
				</p>
			</div>

			<div class="flex items-center gap-2">
				<button
					class="bg-indigo-200 py-2 px-4 rounded-md"
					@click="tasksStore.toggleTaskCompleteness(props.task.id)"
				>
					{{ props.task.isCompleted ? 'Resume' : 'Complete' }}
				</button>

				<button
					class="bg-red-300 py-2 px-4 rounded-md"
					@click="tasksStore.deleteTask(props.task.id)"
				>
					Remove
				</button>
			</div>
		</div>
	</Transition>
</template>
