export default (state = null, action) => {
	console.log('action: ', action);

	switch (action.type) {
		case 'SELECT_LIBRARY':
			return action.payload;
		default:
			return state;
	}
};
