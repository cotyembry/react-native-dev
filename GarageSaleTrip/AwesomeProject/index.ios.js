/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

// import Navbar from '/Users/cotyembry/Developer/react-native-dev/GarageSaleTrip/AwesomeProject/node_modules/_coty/Navbar.jsx';
// import Navbar from '/Users/cotyembry/Developer/react-native-dev/GarageSaleTrip/AwesomeProject/js/components/Navbar.jsx';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Navbar extends React.Component {
  render() {
    return (
      <div>
            <Text style={styles.welcome}>
              Hey Sasha!kalsjdflkajsfklsa
              Welcome to React Native!
            </Text>
      </div>
    )
  }
}

class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar />
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
