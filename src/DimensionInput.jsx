import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Icon } from 'semantic-ui-react';

class DimensionInput extends React.Component{
	constructor(props){
		super(props);
		const { width,height } = props;

		this.state = {
			width,
			height
		};
	}

	render(){
		const {width, height, handleClick} = this.props;

		return (
			<div>
				<span style={{}}>
					<Input
						style={{width: '18%'}}
						size='small'
						placeholder='Height'
						defaultValue={height}
						onChange={(e,data) => this.setState({ height: data.value })}
					/>
					<Icon name='times rectangle' size='small' style={{ marginLeft: '.25em' , marginRight: '.25em'}}/>
					<Input
						style={{ marginRight: '.5em', width: '18%' }}
						size='small'
						placeholder='Width'
						defaultValue={width}
						onChange={(e,data) => this.setState({ width: data.value })}
					/>
				</span>
				<Button
					basic
					onClick={() => {
						console.log(this.state);
						handleClick(
						parseInt(this.state.height,10),
						parseInt(this.state.width,10)
					)}}>
					Change
				</Button>
			</div>
		);
	}
}

export default connect(
	({ width, height }) => ({ width, height }),
	(dispatch,ownProps) => ({
		handleClick: (height,width) => dispatch({
			type: 'SET_DIMENSIONS',
			height,
			width
		})
	})
)(DimensionInput);