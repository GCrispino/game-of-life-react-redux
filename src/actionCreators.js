const __run = (dispatch,getState) => dispatch({
		type: 'RUN',
		interval: setInterval(
			() => {
				dispatch({ type: 'CALC_NEW_GENERATION'  })},
			1000 - (getState().speed - 1) * 250
		)
	});

export const run = () => __run;

export const setSpeedAndRun = (speed) => () => (dispatch,getState) => {
	dispatch({
		type: 'SET_SPEED',
		speed
	});

	if (getState().interval)
		__run(dispatch,getState,speed);
}