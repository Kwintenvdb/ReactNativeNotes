import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import NotesList from './notesList.js';

export default class Home extends React.Component {
	static propTypes = {
		//title: PropTypes.string.isRequired,
		//onForward: PropTypes.func.isRequired,
		//onBack: PropTypes.func.isRequired,
	}

	render() {
		return (
			<View>
				<Text>Home</Text>
				<NotesList />
			</View>
		);
	}
}
