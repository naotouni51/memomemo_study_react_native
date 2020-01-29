import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from "firebase";

export default class MemoCreateScreen extends React.Component {
  state = {
    content: ''
  }

  createMemo() {
    const { currentUser } = firebase.auth();

    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).add({
      content: this.state.content,
      createdOn: firebase.firestore.Timestamp.now(),
    })
      .then((docRef) => {
        //console.log(docRef.id);
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <Text>メモ作成画面</Text>
          <TextInput
            style={styles.memoEditInput}
            multiline
            value={this.state.content}
            textAlignVertical="top"
            onChangeText={ (text) => {this.setState({ content: text })} }
          />
        </View>
        <View style={styles.saveButton}>
          <TouchableOpacity onPress={() => this.createMemo()}>
            <Text style={styles.saveButtonText}>保存！</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textInputContainer: {
    flex: 1,
    padding: 10,
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: 'white'
  },
  saveButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    height: 50
  },
  saveButtonText: {
    fontSize: 30
  }
});
