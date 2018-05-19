import React from 'react';
import { connect } from 'react-redux';
import Cell from './Cell';

let keyCount = 0;

const Grid = ({ grid, cellSize }) => (
	<svg width={grid[0].length * cellSize} height={grid.length * cellSize}>
		{grid.map((row,y) => row.map((cell,x) => 
			<Cell 
				key={++keyCount}
				alive={cell}
				size={cellSize}
				x={x * cellSize}
				y={y * cellSize}
			/>
		))}
	</svg>
);

export default connect(
	state => ({
		grid: state.grid,
		cellSize: state.cellSize
	})
)(Grid);