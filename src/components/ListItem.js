import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet } from 'react-native';

import { CardSection } from './common';

class ListItem extends Component {
	static propTypes = {
		library: PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	}

	render() {
		return (
			<CardSection>
				<Text style={styles.title}>{this.props.library.title}</Text>
			</CardSection>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		paddingLeft: 15,
	},
});

export default ListItem;
