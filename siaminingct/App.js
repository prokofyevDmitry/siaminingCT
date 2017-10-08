import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './js/homescreen'
import SettingsScreen from './js/settingsscreen'
import WorkersScreen from './js/workersscreen'

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

class ChatScreen extends React.Component {
  static navigationOptions = {
    title: 'Chat with Lucy',
  };
  render() {
    return (
      <View>
        <Text>Chat with Lucy</Text>
        
      </View>
    );
  }
}

const SimpleApp = TabNavigator({
  Workers: {screen: WorkersScreen},
  Home: { screen: HomeScreen },
  Settings : {screen: SettingsScreen},
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

