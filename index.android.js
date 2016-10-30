import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  AsyncStorage,
  Navigator
} from 'react-native';

import ExpandingTextInput from './expandingTextInput.js';
import Scene from './scene.js';
import Home from './home.js';

const STORAGE_KEY = "Notes:key";

export default class NativeApp extends Component {
  constructor(props) {
    super(props);
    this.noteText = "";
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
      <View style={styles.container}>
        <Navigator
          initialRoute={{ component: Home }}
          renderScene={(route, navigator) => 
            <route.component navigator={navigator} {...route.passProps} />
          }
        />

        <View style={styles.container}>
          <ExpandingTextInput />
          <ScrollView>
            {
              this.state.notes.map((note, index) => {
                return <Text key={index}>{note}</Text>
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }

  addNote() {
    var newNotes = this.state.notes;
    newNotes.push(this.noteText);
    this.noteText = "";
    this.setState({ notes: newNotes });
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.notes));
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('NativeApp', () => NativeApp);
