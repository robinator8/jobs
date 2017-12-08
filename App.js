import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      Welcome: { screen: WelcomeScreen },
      Auth: { screen: AuthScreen },
      Main: {
        screen: TabNavigator({
          Map: { screen: MapScreen },
          Deck: { screen: DeckScreen },
          Review: {
            screen: StackNavigator({
              Review: { screen: ReviewScreen },
              Settings: { screen: SettingsScreen }
            })
          }
        },
        {
          tabBarPosition: 'bottom',
        })
      }
    },
    {
      swipeEnabled: false,
      lazyLoad: true,
      animationEnabled: false,
      tabBarPosition: 'bottom',
  });

    return (
      <MainNavigator />
    );
  }
}

export default App;
