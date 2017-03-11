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
  TouchableHighlight,
  View
} from 'react-native';

class CustomDictionary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hello Sasha
        </Text>
      </View>
    );
  }
}

module.exports = CustomDictionary;
/*
let DismissViewControllerManager = NativeModules.DismissViewControllerManager;
let Testing = NativeModules.ActionViewController;

var SimpleApp = React.createClass({
  render() {
    return (
      <View >
        <TouchableHighlight
          onPress={this._onPress.bind(this)}>
          <View>
            <Text >Go Back</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  },
  _onPress() {
    DismissViewControllerManager.goBack();
    //T
  }
});


var Button = require('react-native-button');

var ButtonComponent = React.createClass({
  render() {
    return (
      <TouchableHighlight
          onPress={this._onPress.bind(this)}>
        <Button
          style={{fontSize: 20, color: 'green'}}
          styleDisabled={{color: 'red'}}
        >
          Press Me!
        </Button>
      </TouchableHighlight>
    );
  },

  _onPress() {
    Testing.testing();
  },
});

module.exports = ButtonComponent;
*/

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

AppRegistry.registerComponent('CustomDictionary', () => CustomDictionary);
