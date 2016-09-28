import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class LibraryList extends Component {
	render() {
		console.log('this.props: ', this.props);
		return (
			<View>
				<Text>LibraryList</Text>
			</View>
		);
	}
}

const mapStateToProps = state => ({
	libraries: state.libraries,
});

export default connect(mapStateToProps)(LibraryList);
