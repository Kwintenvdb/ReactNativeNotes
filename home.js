import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import NotesList from './notesList.js';
import NoteEditor from './noteEditor.js';
import NoteData from './noteData.js';

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
		var note = "Testyboo";
		NoteData.addNote(note);
		this.props.navigator.push({
			component: NoteEditor,
			passProps: { note: note }
		});
	}
}
