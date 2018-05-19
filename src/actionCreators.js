export const run = () => (dispatch,getState) =>
	dispatch({
		type: 'RUN',
		interval: setInterval(
			() => dispatch({ type: 'CALC_NEW_GENERATION' }),
			20000 / (100 * getState().speed)
		)
	});