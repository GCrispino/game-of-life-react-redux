export const run = () => dispatch =>
	dispatch({
		type: 'RUN',
		interval: setInterval(
			() => dispatch({ type: 'CALC_NEW_GENERATION' }),
			100
		)
	});