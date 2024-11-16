import type { TTaskPriority } from './TTaskPriority';

export default interface ITask {
	id: string;
	title: string;
	priority: TTaskPriority;
	isCompleted: boolean;
}
