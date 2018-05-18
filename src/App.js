import React, { Component } from 'react';
import Grid from './Grid';
import { StepButton, RunButton, PauseButton} from './buttons'
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
      </div>
    );
  }
}

export default App;
