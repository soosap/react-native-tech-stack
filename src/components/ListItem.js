import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	static propTypes = {
		library: PropTypes.shape({
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		}),
		expanded: PropTypes.bool.isRequired,
	}

	renderDescription = () => {
		const { expanded, library } = this.props;

		if (expanded) {
			return <Text>{library.description}</Text>;
		}
	}

	render() {
		const { id, title } = this.props.library;
	
		return (
			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(id)}
			>
				<View>
					<CardSection>
						<Text style={styles.title}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = StyleSheet.create({
	title: {
		fontSize: 18,
		paddingLeft: 15,
	},
});

const mapStateToProps = (state, ownProps) => ({
	expanded: state.selectedLibraryId === ownProps.library.id,
});

export default connect(mapStateToProps, actions)(ListItem);
