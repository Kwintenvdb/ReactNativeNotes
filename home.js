import React, { Component } from 'react';
import {
	Button,
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import NoteData, { Note } from './noteData.js';
import NotesList from './notesList.js';
import NoteEditor from './noteEditor.js';

export default class Home extends React.Component {
	render() {
		return (
			<View title="hello">
				<NotesList navigator={this.props.navigator} />
				<Button
					title="Create new"
					onPress={() => this.createNewNote()}
				/>
			</View>
		);
	}

	createNewNote() {
		var note = new Note("Testyboo");
		NoteData.addNote(note);
		this.props.navigator.push({
			component: NoteEditor,
			passProps: { note: note }
		});
	}
}
