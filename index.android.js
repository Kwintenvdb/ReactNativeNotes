import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Navigator
} from 'react-native';

import Home from './home.js';

export default class NativeApp extends Component {
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
    flex: 1
  }
});

AppRegistry.registerComponent('NativeApp', () => NativeApp);
