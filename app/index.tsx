import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Text>Open up index.tsx to start working on your app!</Text>
      <Pressable onPress={() => alert('I am done with the lab')}>
        <Text style={styles.button}>Hello There</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
});
