import update from 'immutability-helper';

const generateNewGrid = (height, width) =>
	Array(height).fill([]).map(
		row => Array(width).fill(false).map(x => (Math.random() < .25) ? true : x)
	);

const getNLiveNeighbours = (grid, i, j) => {
	let nLiveNeighbours = 0;

	for (let m = i - 1; m <= i + 1; ++m)
		for (let n = j - 1; n <= j + 1; ++n)
			if ((m !== i || n !== j) && grid[m] && grid[m][n])
				++nLiveNeighbours;

	return nLiveNeighbours;
};

const getCellNewState = (grid, cell, i, j) => {
	const nLiveNeighbors = getNLiveNeighbours(grid, i, j);
	return cell //alive
		? nLiveNeighbors < 2
			? false
			: nLiveNeighbors <= 3
				? true
				: false
		//dead
		: nLiveNeighbors === 3 ? true : false;
};

const expandGrid = ({ grid, width, height }, newHeight, newWidth) => {
	const obj = ({
		grid: Array(newHeight).fill(false).map((row, i) => {
			return Array(newWidth).fill(false).map((cell, j) => {
				return (i < height) && (j < width) && grid[i][j];
			})
		}),
		height: newHeight,
		width: newWidth
	})
	return obj;
};

const calculateNewGeneration =
	grid => grid.map((row, i) => row.map((cell, j) => getCellNewState(grid, cell, i, j)));

const checkAndClearInterval = interval => interval ? clearInterval(interval) : null;

const toggleCell = (grid,x,y) => 
	update(grid,{
		[y]: {
			[x]: { $set: !grid[y][x] }
		}
	});

const height = 35, width = 35;
const initialState = {
	width,
	height,
	cellSize: 17,
	grid: generateNewGrid(height,width),
	nGeneration: 0,
	speed: 1,
	interval: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case 'CALC_NEW_GENERATION':
		
			//derive new generation
			return {
				...state,
				nGeneration: state.nGeneration + 1,
				grid: calculateNewGeneration(state.grid)
			}
		case 'RUN':
			checkAndClearInterval(state.interval);
			return {
				...state,
				interval: action.interval
			}
		case 'PAUSE':
			//delete interval
			checkAndClearInterval(state.interval);

			return {
				...state,
				interval: undefined
			};
		case 'RESET':
			checkAndClearInterval(state.interval);

			return {
				...state,
				interval: undefined,
				nGeneration: 0,
				grid: generateNewGrid(state.height,state.width)
			}
		case 'TOGGLE_CELL': 
			return {
				...state,
				grid: toggleCell(state.grid,action.x,action.y)
			};
		case 'SET_SPEED':
			return {
				...state,
				speed: action.speed
			};
		case 'SET_DIMENSIONS':
			return {
				...state,
				...expandGrid(state, action.height, action.width)
			};
			//reset grid dimensions
		default:
			return state;
	}

}