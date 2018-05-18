import React from 'react';

const aliveColor = 'green',deadColor = 'white';

export default ({ alive, size, x, y }) => (
	<rect 
		x={x} y={y}
		width={size} 
		height={size} 
		fill={alive ? aliveColor : deadColor}
		stroke={'black'}
	/>
);