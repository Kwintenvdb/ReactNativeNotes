import React, { Component } from 'react';
import {
	View,
	Text,
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
				<TouchableHighlight onPress={() => this.save()}>
					<Text>SAVE</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.deleteNote()}>
					<Text>DELETE</Text>
				</TouchableHighlight>

				<View style={{ flex: 1 }}>
					<TextInput
						multiline={true}
						value={this.state.text}
						onChangeText={(text) => this.setState({ text: text })}
						onContentSizeChange={(event) => {
							this.setState({ height: event.nativeEvent.contentSize.height });
						} }
						enablesReturnKeyAutomatically={true}
						style={[styles.textInput, { height: this.state.height }]}
					/>
				</View>
			</View>
		);
	}

	save() {
		this.state.note.noteText = this.state.text;
		NoteData.saveNotes();
	}

	deleteNote() {
		NoteData.removeNote(this.props.note);
		this.props.navigator.pop();
	}
}

const styles = StyleSheet.create({
	textInput: {
		fontSize: 15,
		color: "#444",
	},
});
