import React, { Component, PropTypes } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, LayoutAnimation } from 'react-native';
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

	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	renderDescription = () => {
		const { expanded, library } = this.props;

		if (expanded) {
			return (
				<CardSection>
					<Text style={styles.description}>{library.description}</Text>
				</CardSection>
			);
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
	description: {
		flex: 1,
		paddingLeft: 15,
		paddingRight: 15,
	},
});

const mapStateToProps = (state, ownProps) => ({
	expanded: state.selectedLibraryId === ownProps.library.id,
});

export default connect(mapStateToProps, actions)(ListItem);
