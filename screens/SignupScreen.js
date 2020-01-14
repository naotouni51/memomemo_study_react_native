import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SignupScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>サインアップ画面</Text>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('memoList')}>
          <Text>サインアップ</Text>
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
