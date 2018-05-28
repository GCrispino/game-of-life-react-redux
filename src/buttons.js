import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { run, setSpeedAndRun } from './actionCreators';

const createButtonComponent = (children,action,props) => 
	connect(
		state => state,
		action && action.handleClick 
			? {handleClick: action.handleClick} //if it's an object with the function(for thunks), it should have the handleClick callback
			: dispatch => ({ //if it's an ordinary action object, it gets passed to the prop as is
				handleClick: () => dispatch(action)
			})
	)(
		({ handleClick }) => <Button className='simpleBlackButton' basic onClick={handleClick} {...props}>{ children }</Button>
	);

const selectedColor = 'red';

const createSpeedButtonComponent = (children,speed,fn) => 
	connect(
		state => ({ color: state.speed === speed ? selectedColor : null }),
		{ handleClick: fn(speed) }
	)(
		({ handleClick, color }) => <Button basic size='tiny' color={color} onClick={handleClick} >{ children }</Button>
	);

export const StepButton = createButtonComponent(
	<Icon name='step forward' />,
	{type: 'CALC_NEW_GENERATION'},
	{icon: true, title: 'Step'}
);

export const RunButton = createButtonComponent(<Icon name='play' />,{handleClick: run},{ icon: true,title: 'Run' });
export const PauseButton = createButtonComponent(<Icon name='pause' />, { type: 'PAUSE' }, { icon: true,title: 'Pause' });
export const ResetButton = createButtonComponent(<Icon name='repeat' />, { type: 'RESET' }, { icon: true, title: 'Reset' });
export const SetSpeed1xButton = createSpeedButtonComponent('1x',1,setSpeedAndRun);
export const SetSpeed2xButton = createSpeedButtonComponent('2x',2,setSpeedAndRun);
export const SetSpeed3xButton = createSpeedButtonComponent('3x',3,setSpeedAndRun);
export const SetSpeed4xButton = createSpeedButtonComponent('4x',4,setSpeedAndRun);
export const SetSpeed5xButton = createSpeedButtonComponent('5x',5,setSpeedAndRun);