import React from 'react';
import { View, StyleSheet } from 'react-native';

export const Card = ({ children }) => (
	<View style={styles.container}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		marginLeft: 5,
		marginRight: 5,
		marginTop: 10,
	}
});
