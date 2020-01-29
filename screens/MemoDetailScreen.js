import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from "firebase";

export default class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
    content: '',
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params.memo)
    this.setState({ memo: this.props.navigation.state.params.memo })
    this.setState({ content: this.props.navigation.state.params.memo.content})
  }

  editMemo() {
    // console.log('編集')

    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = firebase.firestore.Timestamp.now();

    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.memo.key)
    .update({
      content: this.state.content,
      createdOn: newDate,
    })
    .then(() => {
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.memoEditInput}
            multiline
            value={this.state.content}
            textAlignVertical="top"
            onChangeText={ (text) => {this.setState({ content: text })} }
          />
        </View>
        <View style={styles.saveButton}>
          <TouchableOpacity onPress={() => this.editMemo()}>
            <Text style={styles.saveButtonText}>編集！</Text>
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
    backgroundColor: 'yellowgreen',
    height: 50
  },
  saveButtonText: {
    fontSize: 30
  }
});
