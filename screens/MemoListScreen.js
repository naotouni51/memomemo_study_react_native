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

  renderItem({item}) {
    return (
      <View style={styles.memoList}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('memoDetail', {memo: item})}>
          <Text style={styles.memoListText}>{item.content.substring(0, 10)}</Text>
          {/* <Text style={styles.memoDate}>{String(item.createdOn.toDate())}</Text> */}
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <FlatList data={this.state.memoList} renderItem={(item) => this.renderItem(item)} />

        <View style={styles.createButton}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('memoCreate')}>
            <Text style={styles.createButtonText}>+</Text>
          </TouchableOpacity>
        </View>

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
    height: 50,
    borderBottomWidth: 1
  },
  memoListText: {
    fontSize: 30,
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
