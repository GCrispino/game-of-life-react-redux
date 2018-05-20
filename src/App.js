import React, { Component } from 'react';
import Grid from './Grid';
import { 
  StepButton, RunButton, PauseButton, ResetButton,
  SetSpeed1xButton,SetSpeed2xButton,SetSpeed3xButton,SetSpeed4xButton,SetSpeed5xButton
} from './buttons';
import DimensionInput from './DimensionInput';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <Grid />
        <br />
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
  }
}

export default App;
