import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import ButtonContainer from './ButtonContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h2>react-redux game of life</h2>
        <div style={{width: this.props.width, margin: 'auto'}}>
          <Grid />
          <br />
          <ButtonContainer />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({ width: (state.width * state.cellSize) + 'px' }),
)(App);
