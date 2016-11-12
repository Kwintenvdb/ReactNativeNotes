import React, { Component } from 'react';
import {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  View,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';

import NavBar from './navBar.js';
import NoteData from './noteData.js';
import Home from './home.js';

var navigator;

BackAndroid.addEventListener("hardwareBackPress", () => {
  navigator.pop();
  return true;
});

export default class NativeApp extends Component {
  componentWillMount() {
    NoteData.loadNotes().then(() => this.setState({}));
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Navigator
          ref={(nav) => navigator = nav}
          initialRoute={{ component: Home }}
          navigationBar={
            <NavBar ref={(navBar) => this.navBar = navBar} />
          }
          renderScene={(route, navigator) =>
            {
              if (this.navBar != null) {
                this.navBar.routeUpdated(route);
              }
              return (
                <View style={styles.container}>
                  <route.component navigator={navigator} {...route.passProps} />
                </View>
              )
            }
          }
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FadeAndroid}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
});

AppRegistry.registerComponent('NativeApp', () => NativeApp);
