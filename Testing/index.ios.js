/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Testing extends Component {
  render() {
    return (

        <View style={styles.container}>
          <ButtonComponent />


          <Text >
            Welcome to React Native!
          </Text>

        </View>

    );
  }
}

var Button = require('react-native-button');

var ButtonComponent = React.createClass({
  render() {
    return (
      <Button
        style={ styles.button }
        onPress={this._handlePress}
      >

        <Text style={ styles.styleText }>Press Me!</Text>
      </Button>
    );
  },

  _handlePress(event) {
    console.log('Pressed!');
  },
});

const styles = StyleSheet.create({
  button: {

    height: 60,
    backgroundColor: 'orange', //"#f2f2f2",
    borderRadius: 10,
  },
  styleText: {
    top: 40, //{2 + 2},
    color: 'red',
  },
  container: {
    flex: 1,
    top: 60,
    //margin: 50,
    //justifyContent: 'center',
    alignItems: 'flex-start',
    //backgroundColor: '#F5FCFF',
  },
  /*
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
  */
});

AppRegistry.registerComponent('Testing', () => Testing);
