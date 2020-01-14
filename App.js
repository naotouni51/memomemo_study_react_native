import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import MemoListScreen from "./screens/MemoListScreen";
import MemoDetailScreen from "./screens/MemoDetailScreen";


export default class App extends React.Component {
  render() {

    const MainTab = createStackNavigator({
      login:      { screen: LoginScreen },
      signup:     { screen: SignupScreen },
      memoList:   { screen: MemoListScreen },
      memoDetail: { screen: MemoDetailScreen }
    });

    const NavigatorTab = createAppContainer(MainTab);

    return (
      <View style={styles.container}>
        <NavigatorTab />  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
