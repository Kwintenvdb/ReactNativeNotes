import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

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
				<Text>{this.props.note}</Text>
			</View>
		);
	}

	goBack() {
		this.props.navigator.pop();
	}

	save() {

	}
}
