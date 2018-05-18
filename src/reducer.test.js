import reducer from './reducer';

describe('reducer',() => {
	it('should return the initial state', () => {
		const height = 50,width = 50;
		expect(reducer(undefined, {})).toEqual({
			width,
			height,
			grid: Array(height).fill([]).map(row => Array(width).fill(false)),
			nGeneration: 0,
			speed: 1,
			interval: null
		})
	});

	it('should not return any live cell',() => {
		const state = { grid: [[false, false, false], [false, false, false], [false, false, false]], speed: 1 };
		expect(reducer(state,{type: 'CALC_NEW_GENERATION'})).toEqual(state);
	});

	it('should calculate new cells\' lives - 1', () => {
		const initialState = { 
			grid: [
				[true, true, true], 
				[true, true, true], 
				[false, false, false]
			], 
			speed: 1 
		};
		const newState = {
			grid: [
				[true, false, true],
				[true, false, true],
				[false, true, false]
			],
			speed: 1 
		}
		expect(reducer(initialState, { type: 'CALC_NEW_GENERATION' })).toEqual(newState);
	});

	it('should calculate new cells\' lives - 2', () => {
		const initialState = { 
			grid: [
				[true, false, false], 
				[true, false, true], 
				[true, false, false]
			], 
			speed: 1 
		};
		const newState = {
			grid: [
				[false, true, false],
				[true, false, false],
				[false, true, false]
			],
			speed: 1 
		}
		expect(reducer(initialState, { type: 'CALC_NEW_GENERATION' })).toEqual(newState);
	});
});