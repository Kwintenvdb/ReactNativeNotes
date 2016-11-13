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
          <Text style={styles.navBarText}>BACK</Text>
        </TouchableHighlight>
        }
        {this.route &&
        <View style={styles.navBarTitle}>
          <Text style={styles.navBarText}>{this.getTitle(this.route.component)}</Text>
        </View>
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
    return component == Home ? "NOTES" : "EDIT NOTE";
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#2196F3",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 45,
    // borderBottomWidth: 1,
    borderColor: "#0D83E3",
    padding: 10,
    elevation: 1
  },

	navBarText: {
		color: "white",
    fontWeight: "500",
	},

  navBarTitle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
