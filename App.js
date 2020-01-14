import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import firebase from "firebase";
require("firebase/firestore");


import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import MemoListScreen from "./screens/MemoListScreen";
import MemoDetailScreen from "./screens/MemoDetailScreen";


const firebaseConfig = {
  apiKey: "AIzaSyCvaCys7GQc6qWQ5NfG6ZUxv9XQuDSixRQ",
  authDomain: "memomemo-a5548.firebaseapp.com",
  databaseURL: "https://memomemo-a5548.firebaseio.com",
  projectId: "memomemo-a5548",
  storageBucket: "memomemo-a5548.appspot.com",
  messagingSenderId: "860521399728",
  appId: "1:860521399728:web:d474cdda869049660d4275"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
  render() {

    const MainTab = createStackNavigator({
      // login:      { screen: LoginScreen },
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
