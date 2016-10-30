import React, { Component, PropTypes } from 'react';
import {
	AsyncStorage,
	ScrollView,
	Text,
	View
} from 'react-native';

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
        {
          this.state.notes.map((note, index) => {
            return <Text key={index}>{note}</Text>
          })
        }
      </ScrollView>
		);
	}

	addNote() {
    var newNotes = this.state.notes;
    newNotes.push(this.noteText); // move adding to a new "scene"
    this.noteText = "";
    this.setState({ notes: newNotes });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.notes));
  }
}
