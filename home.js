import React, { Component } from 'react';
import {
	Button,
	View,
	StyleSheet,
	Text,
	TouchableHighlight
} from 'react-native';

import NoteData, { Note } from './noteData.js';
import NotesList from './notesList.js';
import NoteEditor from './noteEditor.js';

export default class Home extends React.Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<NotesList navigator={this.props.navigator} />
				<View style={styles.buttonContainer}>
					<Button
						title="Create new"
						onPress={() => this.createNewNote()}
					/>
				</View>
			</View>
		);
	}

	createNewNote() {
		var note = new Note("");
		NoteData.addNote(note);
		this.props.navigator.push({
			component: NoteEditor,
			passProps: { note: note }
		});
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		right: 15,
		bottom: 15,
		position: "absolute",
	},
});
