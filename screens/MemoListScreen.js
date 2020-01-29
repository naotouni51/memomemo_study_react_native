import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import firebase from "firebase";


export default class MemoListScreen extends React.Component {
  state = {
    memoList: []
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();

    db.collection(`users/${currentUser.uid}/memos`)
    .onSnapshot((snapshot) => {
      const memoList = [];
      snapshot.forEach((doc) => {
        memoList.push({ ...doc.data(), key: doc.id });
        console.log(memoList)
      });
      this.setState({ memoList });
    });
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

  renderItem({item}) {
    return (
      <View style={styles.memoList}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('memoDetail', {memo: item})}>
          <Text style={styles.memoListText}>{item.content.substring(0, 10)}</Text>
          <Text style={styles.memoDate}>{this.formatDate( item.createdOn.toDate(), 'YYYY年MM月DD日 hh:mm' )}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList data={this.state.memoList} renderItem={(item) => this.renderItem(item)} />

        <TouchableOpacity style={styles.createButton} onPress={() => this.props.navigation.navigate('memoCreate')}>
          <Text style={styles.createButtonText}>+</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff3b8',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  memoList: {
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBottomColor: 'gray',
    padding: 5,
    borderBottomWidth: 1
  },
  memoListText: {
    fontSize: 30,
  },
  memoDate: {
    fontSize: 12,
    color: 'gray'
  },
  createButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30
  },
  createButtonText: {
    fontSize: 28
  }
});
