import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';


import Colors from './app/config/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Gym Buddy</Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 40,
    fontWeight: '900',
    color: Colors.primaryText
  },
});
