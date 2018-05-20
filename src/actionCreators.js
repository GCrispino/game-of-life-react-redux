export const run = () => (dispatch,getState) =>
	dispatch({
		type: 'RUN',
		interval: setInterval(
			() => dispatch({ type: 'CALC_NEW_GENERATION' }),
			20000 / (100 * getState().speed)
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