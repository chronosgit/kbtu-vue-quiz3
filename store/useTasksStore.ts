import type ITask from '~/interfaces/features/ITask';
import type { TTaskPriority } from '~/interfaces/features/TTaskPriority';

export const useTasksStore = defineStore('tasksStore', () => {
	const tasks = ref<ITask[]>([]);

	const addTask = (title: string, priority: TTaskPriority) => {
		if (typeof title !== 'string') throw Error('Invalid task title');

		const newTask = <ITask>{
			id: new Date().toString(),
			title,
			priority,
			isCompleted: false,
		};

		tasks.value.push(newTask);
	};

	const toggleTaskCompleteness = (taskId: string) => {
		const task = tasks.value.find((t) => t.id === taskId);

		if (!task) return;

		task.isCompleted = !task.isCompleted;
	};

	const deleteTask = (taskId: string) => {
		const taskIdInArr = tasks.value.findIndex((t) => t.id === taskId);

		if (taskIdInArr === -1) return;

		tasks.value.splice(taskIdInArr, 1);
	};

	const sortTasksByPriority = (order: 'asc' | 'desc' = 'asc') => {
		const priorityOrder = {
			high: 1,
			medium: 2,
			low: 3,
		};

		tasks.value.sort((a, b) => {
			const compar = priorityOrder[a.priority] - priorityOrder[b.priority];

			return order === 'desc' ? compar : -compar;
		});
	};

	watch(
		() => tasks.value,
		(newT, oldT) => {
			if (newT.length > oldT.length) {
				console.log('Added new task!');
			}
		},
	);

	return {
		tasks,
		addTask,
		toggleTaskCompleteness,
		deleteTask,
		sortTasksByPriority,
	};
});
