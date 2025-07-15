import { StatusBar } from 'expo-status-bar';
import { ItemList } from '../components/itemList';
import { Text, View, Pressable} from 'react-native';
import React from 'react';
import {router} from 'expo-router';
import styles from '../components/style';


export default function IndexPage() {
  return (
    <View style={styles.container}>
      <Text style = {{fontSize: 24, fontWeight: 'bold', backgroundColor: '#f9f9f9', borderRadius: 10, marginBottom: 20}}>Welcome to Our App!</Text>
      <Pressable onPress={() => alert('I am done with the lab')}>
        <Text style={styles.button}>Hello There</Text>
      </Pressable>
      <ItemList />
      <Pressable onPress={() => router.push('/lab3') }>
        <Text style={styles.button}>To Lab3</Text>
      </Pressable>
       <Pressable onPress={() => router.push('/lab4') }>
        <Text style={styles.button}>To Lab4</Text>
      </Pressable>
        <Pressable onPress={() => router.push('/lab5') }>
        <Text style={styles.button}>To Lab5</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}
