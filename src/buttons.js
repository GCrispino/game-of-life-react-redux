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
export const RunButton = createButtonComponent('Run',{handleClick: run});