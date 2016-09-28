import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Button = ({ children, onPress }) => (
	<TouchableOpacity style={styles.button} onPress={onPress}>
		<Text style={styles.text}>{children}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		flex: 1,
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#007aff',
		marginLeft: 5,
		marginRight: 5,
	},
	text: {
		alignSelf: 'center',
		color: '#007aff',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10,
	}
});
