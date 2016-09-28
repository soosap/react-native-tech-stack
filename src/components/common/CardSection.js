import React from 'react';
import { StyleSheet, View } from 'react-native';

export const CardSection = ({ children }) => (
	<View style={styles.container}>
		{children}
	</View>
);

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		padding: 5,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		borderColor: '#ddd',
		position: 'relative',
	},
});
