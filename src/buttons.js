import React from 'react';
import { connect } from 'react-redux';
import { run } from './actionCreators';

const createButtonComponent = (children,action) => 
	connect(
		state => state,
		action && action.handleClick 
			? {handleClick: action.handleClick} //if it's an object with the function(for thunks), it should have the handleClick callback
			: dispatch => ({ //if it's an ordinary action object, it gets passed to the prop as is
				handleClick: () => dispatch(action)
			})
	)(
		({ handleClick }) => <button onClick={handleClick}>{ children }</button>
	);

export const StepButton = createButtonComponent('Step',{type: 'CALC_NEW_GENERATION'});
export const PauseButton = createButtonComponent('Pause',{type: 'PAUSE'});
export const RunButton = createButtonComponent('Run',{handleClick: run(1)});
export const ResetButton = createButtonComponent('Reset',{type: 'RESET'});
export const SetSpeed1xButton = createButtonComponent('1x',{handleClick: run(1)});
export const SetSpeed2xButton = createButtonComponent('2x',{handleClick: run(2)});
export const SetSpeed3xButton = createButtonComponent('3x',{handleClick: run(3)});
export const SetSpeed4xButton = createButtonComponent('4x',{handleClick: run(4)});
export const SetSpeed5xButton = createButtonComponent('5x',{handleClick: run(5)});