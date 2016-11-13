import React, { Component } from 'react';
import {
	Button,
	View,
	Text,
	ScrollView,
	StyleSheet,
	TextInput,
	TouchableHighlight
} from 'react-native';

import NoteData from './noteData.js';
import Note from './noteData.js';

export default class NoteEditor extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			note: this.props.note,
      text: this.props.note.noteText,
			height: 0
    };
  }

	render() {
		return (
			<View style={{flex: 1}}>
				<ScrollView style={styles.noteEditor}>
					<TextInput
						multiline={true}
						value={this.state.text}
						onChangeText={(text) => this.onTextChanged(text)}
						onContentSizeChange={(event) => {
							this.setState({ height: event.nativeEvent.contentSize.height });
						}}
						enablesReturnKeyAutomatically={true}
						placeholder="Write a note..."
						style={[styles.textInput, { height: this.state.height }]}
					/>
				</ScrollView>
				{this.renderButtons()}
			</View>
		);
	}

	renderButtons() {
		return (
			<View style={styles.buttonContainer}>
				<View style={styles.button}>
					<Button
						onPress={() => this.deleteNote()}
						title="Delete"
						color="red"
					/>
				</View>
				{/*<View style={{width: 15}} />
				<View style={styles.button}>
					<Button
						onPress={() => this.save(this.state.text)}
						title="Save"
					/>
				</View>*/}
			</View>
		);
	}

	onTextChanged(text) {
		this.setState({text: text});
		this.save(text);
	}

	save(text) {
		this.state.note.noteText = text;
		NoteData.saveNotes();
	}

	deleteNote() {
		NoteData.removeNote(this.props.note);
		this.props.navigator.pop();
	}
}

const styles = StyleSheet.create({
	noteEditor: {
		flex: 1,
		marginTop: 10,
		paddingRight: 10,
		paddingLeft: 10,
		paddingBottom: 10,
	},

	textInput: {
		fontSize: 15,
		color: "#444",
	},

	buttonContainer: {
		flexDirection: "row",
		padding: 15,
	},

	button: {
		flex: 1,
	}
});
