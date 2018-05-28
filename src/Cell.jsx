import React from 'react';
import { connect } from 'react-redux';

const aliveColor = 'green',deadColor = 'rgb(249, 255, 250)';

const Cell = ({ alive, size, x, y, handleClick }) => (
	<rect 
		x={x} y={y}
		width={size} 
		height={size} 
		fill={alive ? aliveColor : deadColor}
		stroke={'black'}
		onClick={handleClick}
	/>
);

export default connect(
	state => state,
	(dispatch,ownProps) => ({
		handleClick: () => dispatch({
			type: 'TOGGLE_CELL',
			x: ownProps.x / ownProps.size,
			y: ownProps.y / ownProps.size
		})
	})
)(Cell);