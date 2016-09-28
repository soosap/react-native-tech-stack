import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';

import LibraryList from './components/LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Header title="TechStack" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;
