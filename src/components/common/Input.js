import React from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

export const Input = ({
	autoCorrect,
	autoCapitalize,
	label,
	onChangeText,
	placeholder,
	secureTextEntry,
	value,
}) => (
	<View style={styles.container}>
		<Text style={styles.label}>{label}</Text>
		<TextInput
			autoCorrect={autoCorrect}
			autoCapitalize={autoCapitalize}
			onChangeText={onChangeText}
			placeholder={placeholder}
			secureTextEntry={secureTextEntry}
			style={styles.input}
			value={value}
		/>
	</View>
);

Input.defaultProps = {
	autoCorrect: false,
	autoCapitalize: 'none',
	secureTextEntry: false,
};

const styles = StyleSheet.create({
	container: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1,
	},
	input: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	}
});
