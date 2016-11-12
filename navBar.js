import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Home from './home.js';

export default class NavBar extends Component {
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

const styles = StyleSheet.create({
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
    borderColor: "#AAA",
    padding: 10,
  },
});
