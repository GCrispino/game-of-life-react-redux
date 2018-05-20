export const run = speed => () => dispatch => 
	dispatch({
		type: 'RUN',
		speed,
		interval: setInterval(
			() => dispatch({ type: 'CALC_NEW_GENERATION'  }),
			1000 - (speed - 1) * 250
		)
	});

//TEST WITH setTimeout() !!
// export const run = () => (dispatch,getState) => {
// 	(function __run(){
// 		setTimeout(() => {
// 			dispatch({type: 'CALC_NEW_GENERATION'});
// 			console.log(getState().height,getState().width);
// 			__run();
// 		},0);
// 	})();
// }