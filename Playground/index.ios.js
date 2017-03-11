/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  NativeModules,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <ExampleComponent />
      </View>

    );
  }
}

var Button = require('react-native-button');
let Testing = NativeModules.AppDelegate;

var ExampleComponent = React.createClass({
  render() {
    return (
      <Button
        style={{fontSize: 20, color: 'green'}}
        styleDisabled={{color: 'red'}}
        onPress={this._handlePress}
      >
        Press Me!
      </Button>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
    Testing.testing();
  },
});

module.exports = ExampleComponent;

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

AppRegistry.registerComponent('Playground', () => Playground);
