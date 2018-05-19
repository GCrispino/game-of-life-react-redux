import React from 'react';
import { connect } from 'react-redux';

const DimensionInput = ({width, height, handleClick}) => {
	const 
		refInputWidth = React.createRef(),
		refInputHeight = React.createRef();
	return (
		<div>
			<input type='text' defaultValue={height} ref={refInputHeight}/>
			<input type='text' defaultValue={width} ref={refInputWidth}/>
			<button 
				onClick={() => handleClick(
					parseInt(refInputHeight.current.value),
					parseInt(refInputWidth.current.value)
				)}>
				Change
			</button>
		</div>
	);
};

export default connect(
	({ width, height }) => ({ width, height }),
	(dispatch,ownProps) => ({
		handleClick: (height,width) => dispatch({
			type: 'SET_DIMENSIONS',
			height,
			width
		})
	})
)(DimensionInput);