import React, { Component } from 'react';
import Grid from './Grid';
import { StepButton, RunButton, PauseButton, ResetButton } from './buttons';
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
      </div>
    );
  }
}

export default App;
