import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoList}>
          <Text style={styles.memoListText}>メモその1</Text>
        </View>
        <View style={styles.memoList}>
          <Text style={styles.memoListText}>メモその2</Text>
        </View>
        <View style={styles.memoList}>
          <Text style={styles.memoListText}>メモその3</Text>
        </View>
        <View style={styles.memoList}>
          <Text style={styles.memoListText}>メモその4</Text>
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
  }
});
