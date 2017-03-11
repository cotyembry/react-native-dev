/**
 * Sample React Native App
 * https://github.com/facebook/react-native

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
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

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);

*/

/*

'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class App extends Component {
  render() {
    return (
      
        <View style={styles.container}>
          <Text style={styles.textStyle}>Hello</Text>
        </View>
      
      
      <Navigator
        
        initialRoute={{
          component: MyView,
          title: 'My View Title',
          passProps: { myProp: 'foo' },
        }}
        
        renderScene={(route, Navigator) => {
          return this.props.navigator.push({
            name: 'MyView',
            component: MyView
          });

        }}
      />
      
    );
  }
}

var MyView = React.createClass({
  render() {  
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Hello</Text>
      </View> 
    );
  }
});


const styles = StyleSheet.create({
    container: {  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple',
    },
    textStyle: {
      fontSize: 52,
      color: 'white'
    },
});

AppRegistry.registerComponent('HelloWorld', () => App);

*/


'use strict';

var React = require('react-native');


var {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Switch,
  Text,
  View,
} = React; //from 'react-native';

class App extends React.Component {

    render() {
        return (
            <Navigator
                initialRoute = {{ 
                  name: 'WelcomeView', 
                  component: WelcomeView 
                }}
                configureScene={() => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}
                renderScene={(route, navigator) => {
                    // count the number of func calls
                    //console.log(route, navigator); 

                    if (route.component) {
                        return React.createElement(route.component, { navigator });
                    }
                }}  />
        );
    }
}

class FeedView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={ styles.feedView }>
                    Feed View
                </Text>
            </View>
        );
    }
}

var WelcomeView = React.createClass ({
  
  getInitialState() {
    return {
      welcomeViewSwitch: false,
    };
  },
  
    onPressFeed() {
        this.props.navigator.push({
            name: 'FeedView',
            component: FeedView
        });
    },

    render() {

        return (
        
              <View style={styles.container}>
                  <Text style={styles.welcome}>
                      Welcome View!
                  </Text>

                  <Text style={styles.textStyle} onPress={this.onPressFeed.bind(this)}>
                      Press to go to feed
                  </Text>
                  <Switch 
                    onValueChange={(value) => this.setState({welcomeViewSwitch: value})} 
                    value={this.state.welcomeViewSwitch}       />
              </View>
      
        );
    }
});

const styles = StyleSheet.create({
    container: {  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'purple',
    },
    feedView: {
      fontSize: 35,
      color: 'white',
    },
    textStyle: {
      fontSize: 35,
      color: 'white'
    },
    welcome: {
      fontSize: 52,
      color: 'white',
    }
});

AppRegistry.registerComponent('HelloWorld', () => App);

/*
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Switch,
  Text,
  View
} = React;

var App = React.createClass({
  getInitialState() {
    return {
      trueSwitchIsOn: true,
      falseSwitchIsOn: false,
    };
  },
  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({falseSwitchIsOn: value})}
          style={{marginBottom: 10}}
          value={this.state.falseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({trueSwitchIsOn: value})}
          value={this.state.trueSwitchIsOn} />
      </View>
    );
  }
});

var DisabledSwitchExample = React.createClass({
  render() {
    return (
      <View>
        <Switch
          disabled={true}
          style={{marginBottom: 10}}
          value={true} />
        <Switch
          disabled={true}
          value={false} />
      </View>
    );
  },
});

var ColorSwitchExample = React.createClass({
  getInitialState() {
    return {
      colorTrueSwitchIsOn: true,
      colorFalseSwitchIsOn: false,
    };
  },
  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({colorFalseSwitchIsOn: value})}
          onTintColor="#00ff00"
          style={{marginBottom: 10}}
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorFalseSwitchIsOn} />
        <Switch
          onValueChange={(value) => this.setState({colorTrueSwitchIsOn: value})}
          onTintColor="#00ff00"
          thumbTintColor="#0000ff"
          tintColor="#ff0000"
          value={this.state.colorTrueSwitchIsOn} />
      </View>
    );
  },
});

var EventSwitchExample = React.createClass({
  getInitialState() {
    return {
      eventSwitchIsOn: false,
      eventSwitchRegressionIsOn: true,
    };
  },
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <View>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn} />
          <Switch
            onValueChange={(value) => this.setState({eventSwitchIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchIsOn} />
            <Text>{this.state.eventSwitchIsOn ? 'On' : 'Off'}</Text>
        </View>
        <View>
          <Switch
            onValueChange={(value) => this.setState({eventSwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn} />
          <Switch
            onValueChange={(value) => this.setState({eventSwitchRegressionIsOn: value})}
            style={{marginBottom: 10}}
            value={this.state.eventSwitchRegressionIsOn} />
          <Text>{this.state.eventSwitchRegressionIsOn ? 'On' : 'Off'}</Text>
        </View>
      </View>
    );
  }
});

var examples = [
  {
    title: 'Switches can be set to true or false',
    render(): ReactElement { return <BasicSwitchExample />; }
  },
  {
    title: 'Switches can be disabled',
    render(): ReactElement { return <DisabledSwitchExample />; }
  },
  {
    title: 'Change events can be detected',
    render(): ReactElement { return <EventSwitchExample />; }
  },
  {
    title: 'Switches are controlled components',
    render(): ReactElement { return <Switch />; }
  }
];

if (React.Platform.OS === 'ios') {
  examples.push({
    title: 'Custom colors can be provided',
    render(): ReactElement { return <ColorSwitchExample />; }
  });
}

exports.title = '<Switch>';
exports.displayName = 'SwitchExample';
exports.description = 'Native boolean input';
exports.examples = examples;

AppRegistry.registerComponent('HelloWorld', () => App);
*/