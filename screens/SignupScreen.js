import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class SignupScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }


  render() {
    return (
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={ (text) => { this.setState({ email: text }) }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />

        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={ (text) => { this.setState({ password: text }) }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
        />

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
  input:{
    borderWidth: 1,
    padding: 5,
    marginBottom: 10,
    width: '80%',
  }
});
