const height = 50, width = 50;

const initialState = {
	width,
	height,
	grid: Array(height).fill([]).map(row => Array(width).fill(false).map(x => x)),
	nGeneration: 0,
	speed: 1,
	interval: null
};

const getNLiveNeighbours = (grid, i, j) => {
	let nLiveNeighbours = 0;

	for (let m = i - 1;m <= i + 1;++m)
		for (let n = j - 1;n <= j + 1;++n)
			if ((m !== i || n !== j) && grid[m] && grid[m][n])
				++nLiveNeighbours;

	return nLiveNeighbours;
};

const getCellNewState = (grid,cell,i,j) => {
	const nLiveNeighbors = getNLiveNeighbours(grid,i,j);
	return cell //alive
	? nLiveNeighbors < 2 
		? false
		: nLiveNeighbors <= 3
			? true
			: false
	//dead
	: nLiveNeighbors === 3 ? true : false;
};

const expandGrid = ({ grid , width , height },newHeight,newWidth) => 
	Array(newHeight).fill(false).map((row,i) => 
		Array(newWidth).fill(false).map((cell,j) => 
			(i < height) && (j < width) && grid[i][j]
		)
	);

const calculateNewGeneration = 
	grid => grid.map( (row,i) => row.map( (cell,j) => getCellNewState(grid,cell,i,j) ) );


export default function (state = initialState, action) {
	switch (action.type) {
		case 'CALC_NEW_GENERATION':
			//derive new generation
			return {
				...state,
				grid: calculateNewGeneration(state.grid)
			}
		case 'SET_INTERVAL':
			if (state.interval)
				clearInterval(state.interval);

			return {
				...state,
				interval: action.interval
			}
		case 'RUN':
			//set interval that will calculate new generations
			return dispatch => dispatch({
				type: 'SET_INTERVAL',
				interval: setInterval(
					() => dispatch({ type: 'CALC_NEW_GENERATION' }),
					(action.speed || state.speed) * (100 / 1000)
				)
			});
		case 'PAUSE':
			//delete interval
			if (state.interval)
				clearInterval(state.interval);

			return {
				...state,
				interval: undefined
			};
		case 'SET_SPEED':
			//reset interval with new speed
			return dispatch => dispatch({
				type: 'RUN',
				speed: action.speed
			});
		case 'SET_DIMENSIONS':
			return {
				...state,
				grid: expandGrid(state, action.height, action.width)
			};
			//reset grid dimensions
		default:
			return state;
	}

}