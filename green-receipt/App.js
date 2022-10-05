import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Input from './components/input'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Green Receipt</Text>
      <Input />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#21c87c',
    padding: 0,
  },
  text: {
    fontFamily: 'American Typewriter',
    fontSize: 50,
    color: 'white',
    marginLeft: 35,
    marginTop: 230
  },
});
