import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>ログイン画面</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('memoList')}>
          <Text>ログイン</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('signup')}>
          <Text>アカウント登録はこちら</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
