import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import firebase from "firebase";

export default class SignupScreen extends React.Component {
  state = {
    email: '',
    password: ''
  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        //console.log('success!', user);
        this.props.navigation.navigate('memoList')
      })
      .catch( (error) => {
        console.log(error);
      }); 
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
          secureTextEntry
        />

        <TouchableOpacity onPress={() => this.signup()}>
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
