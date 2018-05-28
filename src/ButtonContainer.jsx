import React from 'react';
import {
	StepButton, RunButton, PauseButton, ResetButton,
	SetSpeed1xButton, SetSpeed2xButton, SetSpeed3xButton, SetSpeed4xButton, SetSpeed5xButton
} from './buttons';
import DimensionInput from './DimensionInput';

export default () => (
	<div style={{ 
			margin: 'auto', 
			marginBottom: '1em',
			textAlign: 'center',
			width: '50%' 
		}}
	>
		<div style={{marginBottom: '1em'}}>
			<StepButton />
			<RunButton />
			<PauseButton />
			<ResetButton />
		</div>

		<DimensionInput />

		<br />
		<SetSpeed1xButton />
		<SetSpeed2xButton />
		<SetSpeed3xButton />
		<SetSpeed4xButton />
		<SetSpeed5xButton />
		
	</div>
);
		