import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Text>App</Text>
			</View>
		</Provider>
	);
};

export default App;