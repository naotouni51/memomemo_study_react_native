import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.memoList}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('memoDetail')}>
            <Text style={styles.memoListText}>メモその1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.memoList}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('memoDetail')}>
            <Text style={styles.memoListText}>メモその2</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.memoList}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('memoDetail')}>
            <Text style={styles.memoListText}>メモその3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.memoList}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('memoDetail')}>
            <Text style={styles.memoListText}>メモその4</Text>
          </TouchableOpacity>
        </View>

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
