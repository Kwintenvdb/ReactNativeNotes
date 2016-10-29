import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView,
  AsyncStorage
} from 'react-native';

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
        <TextInput
          style={{height: 40}}
          onChangeText={(text) => this.noteText = text}
          onSubmitEditing={() => this.addNote()}
          //value={this.noteText}
        />
        <ScrollView>
        {
          this.state.notes.map(function(note, index) {
            return <Text key={index}>{note}</Text>
          })
        }
        </ScrollView>
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
