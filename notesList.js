import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class NotesList extends React.Component {
	static propTypes = {
		//title: PropTypes.string.isRequired,
		//onForward: PropTypes.func.isRequired,
		//onBack: PropTypes.func.isRequired,
	}

	render() {
		return (
			<View>
				<Text>Notes list...</Text>
			</View>
		);
	}
}
