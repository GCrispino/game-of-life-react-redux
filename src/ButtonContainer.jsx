import React from 'react';
import {
	StepButton, RunButton, PauseButton, ResetButton,
	SetSpeed1xButton, SetSpeed2xButton, SetSpeed3xButton, SetSpeed4xButton, SetSpeed5xButton
} from './buttons';
import DimensionInput from './DimensionInput';

export default () => (
	<div style={{ margin: 'auto', width: '50%' }}>
		<StepButton />
		<RunButton />
		<PauseButton />
		<ResetButton />
		<DimensionInput />

		<SetSpeed1xButton />
		<SetSpeed2xButton />
		<SetSpeed3xButton />
		<SetSpeed4xButton />
		<SetSpeed5xButton />
	</div>
);
		