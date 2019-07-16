/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button, Provider, Toast } from '@ant-design/react-native';
import AppNavigator from './src/AppNavigator'
import HomeScreen from './src/HomeScreen'
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar animated={true}
          backgroundColor='#fff'
          translucent={false}
          showHideTransition={'fade'}
          barStyle={'dark-content'}
          networkActivityIndicatorVisible={true} />
        <AppNavigator/>
      </View>
      );
  }

}