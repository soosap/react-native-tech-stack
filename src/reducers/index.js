import { combineReducers } from 'redux';
import libraries from './libraries.reducer';

export default combineReducers({
	libraries,
	selection: () => 1,
});
