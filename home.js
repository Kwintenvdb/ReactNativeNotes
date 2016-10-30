import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import NotesList from './notesList.js';

export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Text>Home</Text>
				<NotesList navigator={this.props.navigator} />
				<TouchableHighlight onPress={() => this.createNewNote()}>
					<Text>Create new</Text>
				</TouchableHighlight>
			</View>
		);
	}

	createNewNote() {
		
	}
}
