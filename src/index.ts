import {Config} from './config';
import {setData} from './data';
import {render} from './render';

/**
*	Task type definition.
*
*	@typedef {Object} taskType
*	@property {string} id - The unique id of the task.
*	@property {string} text - The title of the task.
*	@property {Date} startDate - The start date of the task.
*	@property {number} days - The duration in days of the task.
*	@property {Array<number>} [dependencies] - The optional list of tasks this tasks depends upon.
*/
export type taskType = {
	id: number,
	text: string,
	startDate: Date,
	days: number,
	dependencies?: Array<number>,
};

/**
*	Tree column type definition.
*
*	@typedef {Object} headerColumnType
*	@property {string} id - The unique id of the column.
*	@property {string} title - The title of the column.
*	@property {string} [width] - The optional width in pixel of the column.
*/
export type headerColumnType = {
	id: string,
	title: string,
	width?: number,
};

/**
*	Gantt chart configuration options type definition.
*
*	@typedef {Object} optionsType
*	@property {number} [treeWidthPercentage] - The percentual width of the tree.
*	@property {Array<headerColumnType>} [columns] - The columns of the tree.
*/
export type optionsType = {
	treeWidthPercentage?: number,
	columns?: Array<headerColumnType>,
};

/**
* Gantt Chart.
*/
export class GanttChart {
	readonly #config: Config; // eslint-disable-line @typescript-eslint/explicit-member-accessibility

	/**
	*	Constructor.
	*
	*	@example const gantt = new GanttChart();
	*/
	public constructor() {
		this.#config = new Config();
	}

	/**
	*	Set configuration options.
	*
	*	@param {optionsType} options - The configuration object.
	*
	*	@example gantt.setConfig({treeWidthPercentage: 50});
	*/
	public setConfig(options: optionsType): void {
		this.#config.setConfig(options);
	}

	/**
	*	Set the tasks and dependencies.
	*
	*	@param {Array<taskType>} tasks - The tasks in the prject.
	*
	*	@example
	*
	*	gantt.setData([
	*		{id: 1, text: 'Planning', startDate: new Date('2020-01-01'), days: 1},
	*		{id: 2, text: 'Analysis', startDate: new Date('2020-01-02'), days: 1, dependencies: [1]},
	*	]);
	*
	*/
	public setData(tasks: Array<taskType>): void {
		setData(tasks, this.#config);
	}

	/**
	*	Render the gantt chart in a given element.
	*
	*	@param {HTMLElement} container - The container element.
	*
	*	@example gantt.render(document.getElementById('gantt_here'));
	*/
	public render(container: HTMLElement): void {
		render(container, this.#config);
	}
}
