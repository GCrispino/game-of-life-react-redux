import React from 'react';
import { Icon } from 'semantic-ui-react';

export default () => (
	<div style={{
		width: '100%',
		textAlign: 'center'
	}}>
		<a 
			title='Follow me on GitHub!'
			href='https://github.com/GCrispino/game-of-life-react-redux' 
			target='_blank'>
			<Icon style={{
				marginTop: '.25em',
				color: 'black',
				textDecoration: 'none'
			}} size='big' name='github square' />
		</a>
	</div>
);