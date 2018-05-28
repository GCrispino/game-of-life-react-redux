import React from 'react';
import { connect } from 'react-redux';

const GenerationCounter = ({ nGeneration }) => (
	<h3 style={{marginTop: 0,marginBottom: 0, textAlign: 'right'}}>generation: {nGeneration}</h3>
);

export default connect(state => ({ nGeneration: state.nGeneration }))(GenerationCounter);