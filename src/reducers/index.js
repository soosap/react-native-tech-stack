import { combineReducers } from 'redux';
import libraries from './libraries.reducer';
import selection from './selection.reducer';

export default combineReducers({
	libraries,
	selectedLibraryId: selection,
});
