import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import firebase from "firebase";

export default class MemoDetailScreen extends React.Component {
  state = {
    memo: {},
    content: '',
  }

  componentDidMount() {
    console.log(this.props.navigation.state.params.memo.createdOn)
    this.setState({ memo: this.props.navigation.state.params.memo })
    this.setState({ content: this.props.navigation.state.params.memo.content})
  }

  formatDate(date, format) {
    if (!format) format = 'YYYY-MM-DD hh:mm:ss.SSS';
    format = format.replace(/YYYY/g, date.getFullYear());
    format = format.replace(/MM/g, ('0' + (date.getMonth() + 1)).slice(-2));
    format = format.replace(/DD/g, ('0' + date.getDate()).slice(-2));
    format = format.replace(/hh/g, ('0' + date.getHours()).slice(-2));
    format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
    format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
    if (format.match(/S/g)) {
      var milliSeconds = ('00' + date.getMilliseconds()).slice(-3);
      var length = format.match(/S/g).length;
      for (var i = 0; i < length; i++) format = format.replace(/S/, milliSeconds.substring(i, i + 1));
    }
    return format;
  };

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

  deleteMemo() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/memos`).doc(this.state.memo.key)
    .delete()
    .then(() => {
      this.props.navigation.goBack();      
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInputContainer}>
          <Text style={styles.dateText}>{this.formatDate(this.props.navigation.state.params.memo.createdOn.toDate(), 'YYYY年MM月DD日 hh:mm:ss')}</Text>
          <TextInput
            style={styles.memoEditInput}
            multiline
            value={this.state.content}
            textAlignVertical="top"
            onChangeText={ (text) => {this.setState({ content: text })} }
          />
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.deleteButton} onPress={() => this.deleteMemo()}>
            <Text style={styles.buttonText}>削除！</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={() => this.editMemo()}>
            <Text style={styles.buttonText}>編集！</Text>
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
  dateText: {
    fontSize: 12,
    color: 'gray'
  },
  textInputContainer: {
    flex: 1,
    padding: 10,
  },
  memoEditInput: {
    flex: 1,
    backgroundColor: 'white',
    fontSize: 20,
  },
  saveButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellowgreen',
    height: 50
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50
  },
  buttonText: {
    fontSize: 30
  }
});
