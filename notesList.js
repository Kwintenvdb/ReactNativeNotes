import React, { Component } from 'react';
import {
	AsyncStorage,
	ScrollView,
	StyleSheet,
	Text,
	TouchableHighlight,
	View
} from 'react-native';

import NoteEditor from './noteEditor.js';
import NoteData from './noteData.js';

const STORAGE_KEY = "Notes:key";

export default class NotesList extends React.Component {
	constructor(props) {
    super(props);
  }

	render() {
		return (
			<ScrollView style={styles.notesList}>
        {this.renderList()}
      </ScrollView>
		);
	}

	renderList() {
		return NoteData.getNotes().map((note, index) => {
			return (
				<TouchableHighlight
					key={index}
					onPress={() => this.onNotePressed(index)}
					style={styles.note}
					underlayColor={"#EEE"}>
					<Text style={styles.noteText}>{note.noteText}</Text>
				</TouchableHighlight>
			)
		})
	}

	onNotePressed(index) {
		console.log("Note " + index + " pressed");
		this.props.navigator.push({
			component: NoteEditor,
			passProps: { note: NoteData.getNotes()[index] }
		});
	}
}

const styles = StyleSheet.create({
	notesList: {
	},

	note: {
		padding: 10,
    borderBottomWidth: 1,
		borderColor: "#AAA",
	},

	noteText: {
		fontSize: 15,
		color: "#444",
	},
});
