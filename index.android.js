import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ScrollView
} from 'react-native';

var notes = [];

export default class NativeApp extends Component {
  constructor(props) {
    super(props);
    this.state = { noteText: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 40}}
          onChangeText={(text) => this.setState({ noteText: text })}
          onSubmitEditing={() => this.addNote()}
          value={this.state.noteText}
        />
        <ScrollView>
        {
          notes.map(function(note, index) {
            return <Text key={index}>{note}</Text>
          })
        }
        </ScrollView>
      </View>
    );
  }

  addNote() {
    notes.push(this.state.noteText);
    this.setState({ noteText: "" });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('NativeApp', () => NativeApp);
