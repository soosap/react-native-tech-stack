import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export const Spinner = ({ size }) => (
	<View style={styles.spinner}>
		<ActivityIndicator size={size} />
	</View>
);

Spinner.defaultProps = {
	size: 'large',
};

const styles = StyleSheet.create({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
