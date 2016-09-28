import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import { connect } from 'react-redux';

import ListItem from './ListItem';

class LibraryList extends Component {
	componentWillMount() {
		// could be placed in constructor as well (see GithubNotes project)
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		
		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	renderRow = (library) => <ListItem library={library} />

	render() {
		return (
			<ListView
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = state => ({
	libraries: state.libraries,
});

export default connect(mapStateToProps)(LibraryList);
