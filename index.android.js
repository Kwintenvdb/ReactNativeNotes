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

import NoteData from './noteData.js';
import Home from './home.js';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.route = null;
  }

  render() {
    return (
      <View style={styles.navBar}>
        {this.route && this.route.component != Home &&
        <TouchableHighlight onPress={() => this.goBack()}>
          <Text>Back</Text>
        </TouchableHighlight>
        }
        {this.route &&
        <TouchableHighlight>
          <Text>{this.getTitle(this.route.component)}</Text>
        </TouchableHighlight>
        }
      </View>
    );
  }

  goBack() {
    this.props.navigator.pop();
  }

  routeUpdated(route) {
    this.route = route;
  }

  getTitle(component) {
    return component == Home ? "Home" : "Edit note";
  }
}

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
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },

  navBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "gainsboro",
    height: 40,
    borderBottomWidth: 1,
    borderColor: "#999",
    padding: 10,
  },

  title: {
      fontSize: 18,
      justifyContent: "center",
      backgroundColor: "red",
      flex: 1,
      alignItems: "center",
   },
});

AppRegistry.registerComponent('NativeApp', () => NativeApp);
