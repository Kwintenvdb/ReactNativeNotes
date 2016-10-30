import React, { Component, PropTypes } from 'react';
import {
	View,
	Text
} from 'react-native';

import NotesList from './notesList.js';

export default class Home extends React.Component {
	render() {
		return (
			<View>
				<Text>Home</Text>
				<NotesList />
			</View>
		);
	}
}
