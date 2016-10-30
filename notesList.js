import React, { Component } from 'react';
import {
	AsyncStorage,
	ScrollView,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import NoteEditor from './noteEditor.js';

const STORAGE_KEY = "Notes:key";

export default class NotesList extends React.Component {
	constructor(props) {
    super(props);
    this.loadInitialState();
  }

	loadInitialState = async () => {
    this.state = { notes: [] };
    var savedNotes = await AsyncStorage.getItem(STORAGE_KEY);
    if (savedNotes != null) {
      this.setState({ notes: JSON.parse(savedNotes) });
    }
  }

	render() {
		return (
			<ScrollView>
        {this.renderList()}
      </ScrollView>
		);
	}

	renderList() {
		return this.state.notes.map((note, index) => {
			return (
				<TouchableHighlight key={index} onPress={() => this.onNotePressed(index)}>
					<Text>{note}</Text>
				</TouchableHighlight>
			)
		})
	}

	onNotePressed(index) {
		console.log("Note " + index + " pressed");
		this.props.navigator.push({
			component: NoteEditor,
			passProps: { note: this.state.notes[index] }
		});
	}

	addNote() {
    var newNotes = this.state.notes;
    newNotes.push(this.noteText); // move adding to a new "scene"
    this.noteText = "";
    this.setState({ notes: newNotes });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.notes));
  }
}
