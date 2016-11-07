import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import NoteData from './noteData.js';

export default class NoteEditor extends React.Component {
	render() {
		return (
			<View>
				<Text>Note Editor</Text>
				<TouchableHighlight onPress={() => this.goBack()}>
					<Text>BACK</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.save()}>
					<Text>SAVE</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() => this.deleteNote()}>
					<Text>DELETE</Text>
				</TouchableHighlight>
				<Text>{this.props.note}</Text>
			</View>
		);
	}

	goBack() {
		this.props.navigator.pop();
	}

	save() {

	}

	deleteNote() {
		NoteData.removeNote(this.props.note);
	}
}
