import reducer from './reducer';

describe('reducer',() => {
	it('should return the initial state', () => {
		const height = 20,width = 20;
		const initialStateWithoutGrid = {
			width,
			height,
			cellSize: 30,
			nGeneration: 0,
			speed: 1,
			interval: null
		};
		let derivedState = reducer(undefined, {});
		delete derivedState['grid'];

		expect(derivedState).toEqual(initialStateWithoutGrid);
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

	it('should expand the grid on width and height',() => {
		const initialState = { 
			grid: [
				[true, false, false], 
				[true, false, true], 
				[true, false, false],
			], 
			height: 3,
			width: 3,
			speed: 1 
		};
		const newState = {
			grid: [
				[true, false, false, false], 
				[true, false, true, false], 
				[true, false, false, false],
				[false, false, false, false],
			],
			height: 4,
			width: 4,
			speed: 1 
		}

		expect(reducer(initialState,{
			type: 'SET_DIMENSIONS',
			height: 4,
			width: 4
		})).toEqual(newState);
	})

	it('should expand the grid on width',() => {
		const initialState = { 
			grid: [
				[true, false, false], 
				[true, false, true], 
				[true, false, false],
			], 
			height: 3,
			width: 3,
			speed: 1 
		};
		const newState = {
			grid: [
				[true, false, false, false], 
				[true, false, true, false], 
				[true, false, false, false],
			],
			height: 3,
			width: 4,
			speed: 1 
		}

		expect(reducer(initialState,{
			type: 'SET_DIMENSIONS',
			height: 3,
			width: 4
		})).toEqual(newState);
	})


	it('should shrink the grid on width and height',() => {
		const initialState = { 
			grid: [
				[true, false, false], 
				[true, false, true], 
				[true, false, false],
			], 
			width: 3,
			height: 3,
			speed: 1 
		};
		const newState = {
			grid: [
				[true, false], 
				[true, false], 
			],
			width: 2,
			height: 2,
			speed: 1 
		}

		expect(reducer(initialState,{
			type: 'SET_DIMENSIONS',
			height: 2,
			width: 2
		})).toEqual(newState);
	})

	it('should shrink the grid on width',() => {
		const initialState = { 
			grid: [
				[true, false, false], 
				[true, false, true], 
				[true, false, false],
			], 
			width: 3,
			height: 3,
			speed: 1 
		};
		const newState = {
			grid: [
				[true, false], 
				[true, false], 
				[true, false], 
			],
			width: 2,
			height: 3,
			speed: 1 
		}

		expect(reducer(initialState,{
			type: 'SET_DIMENSIONS',
			height: 3,
			width: 2
		})).toEqual(newState);
	})
});