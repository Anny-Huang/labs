import { StatusBar } from 'expo-status-bar';
import { ItemList } from '../components/itemList';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';


export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 24, fontWeight: 'bold', backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 20}}>Welcome to Our App!</Text>
      <Pressable onPress={() => alert('I am done with the lab')}>
        <Text style={styles.button}>Hello There</Text>
      </Pressable>
      <ItemList />
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
