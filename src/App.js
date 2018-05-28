import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from './Grid';
import ButtonContainer from './ButtonContainer';
import Footer from './Footer';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div style={{width: this.props.width, margin: 'auto'}}>
          <h2>react-redux game of life</h2>
          <Grid />
          <br />
          <ButtonContainer />
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => ({ width: (state.width * state.cellSize) + 'px' }),
)(App);
