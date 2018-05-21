import React from 'react';
import { connect } from 'react-redux';
import { run, setSpeedAndRun } from './actionCreators';

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

const selectedColor = 'red';

const createSpeedButtonComponent = (children,speed,fn) => 
	connect(
		state => ({ background: state.speed === speed ? selectedColor : null }),
		{ handleClick: fn(speed) }
	)(
		({ handleClick, background }) => <button onClick={handleClick} style={{background}}>{ children }</button>
	);

export const StepButton = createButtonComponent('Step',{type: 'CALC_NEW_GENERATION'});
export const PauseButton = createButtonComponent('Pause',{type: 'PAUSE'});
export const RunButton = createButtonComponent('Run',{handleClick: run});
export const ResetButton = createButtonComponent('Reset',{type: 'RESET'});
export const SetSpeed1xButton = createSpeedButtonComponent('1x',1,setSpeedAndRun);
export const SetSpeed2xButton = createSpeedButtonComponent('2x',2,setSpeedAndRun);
export const SetSpeed3xButton = createSpeedButtonComponent('3x',3,setSpeedAndRun);
export const SetSpeed4xButton = createSpeedButtonComponent('4x',4,setSpeedAndRun);
export const SetSpeed5xButton = createSpeedButtonComponent('5x',5,setSpeedAndRun);