import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TabNavigator from './TabNavigator';

export default class App extends Component {
  render() {
    return (
        <TabNavigator/>
    );
  }
}