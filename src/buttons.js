import React from 'react';
import { connect } from 'react-redux';
import { run } from './actionCreators';

const createButtonComponent = (children,action) => 
	connect(
		state => state,
		dispatch => ({
			handleClick: () => dispatch(action)
		})
	)(
		({ handleClick }) => <button onClick={handleClick}>{ children }</button>
	);

export const StepButton = createButtonComponent('Step',{type: 'CALC_NEW_GENERATION'});
export const PauseButton = createButtonComponent('Pause',{type: 'PAUSE'});

export const RunButton = connect(
  state => state,
  { run }
)(
  ({ run }) => <button onClick={run}>Run</button>
)

