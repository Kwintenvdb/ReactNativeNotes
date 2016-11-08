import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	TouchableHighlight
} from 'react-native';

import NoteData from './noteData.js';

export default class NoteEditor extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      text: this.props.note,
			height: 0
    };
  }

	render() {
		return (
			<View style={{flex: 1}}>
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

				<View style={{flex: 1, backgroundColor: 'powderblue'}}>
				<TextInput
					multiline={true}
					value={this.state.text}
					onChangeText={(text) => this.setState({text: text})}
					onContentSizeChange={(event) => {
						this.setState({ height: event.nativeEvent.contentSize.height });
					} }
					enablesReturnKeyAutomatically={true}
					style={{height: this.state.height}}
					autoCorrect={false}
				/>
				</View>
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
