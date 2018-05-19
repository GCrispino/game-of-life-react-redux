import React, { Component } from 'react';
import Grid from './Grid';
import { StepButton, RunButton, PauseButton} from './buttons';
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
        <DimensionInput />
      </div>
    );
  }
}

export default App;
