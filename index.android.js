import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import NoteData from './noteData.js';
import Home from './home.js';

export default class NativeApp extends Component {
  componentWillMount() {
    NoteData.loadNotes().then(() => this.setState({}));
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  }
});

AppRegistry.registerComponent('NativeApp', () => NativeApp);
