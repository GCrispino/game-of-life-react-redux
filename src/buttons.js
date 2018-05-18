import React from 'react';
import { connect } from 'react-redux';
import { run } from './actionCreators';


export const StepButton = connect(
  state => state,
  dispatch => ({
    handleClick: () => dispatch({type: 'CALC_NEW_GENERATION'})
  })
)(
  ({ handleClick }) => <button onClick={handleClick}>Step</button>
)

export const RunButton = connect(
  state => state,
  { run }
)(
  ({ run }) => <button onClick={run}>Run</button>
)

export const PauseButton = connect(
  state => state,
  dispatch => ({
    handleClick: () => dispatch({type: 'PAUSE'})
  })
)(
  ({ handleClick }) => <button onClick={handleClick}>Pause</button>
)
