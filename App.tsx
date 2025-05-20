import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
 let sampleList = [
  { id: 1, name: 'An-Ni Huang' },
  { id: 2, name: 'Vijay_Thapa Chhetri'},
  { id: 3, name: 'Chen LI'}
 ]

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {sampleList.map((item) => (
        <Text key={item.id} style={{ fontSize:20}}>
          {item.name}
        </Text>
      ))}
      <Pressable onPress={() => alert('I am done with the lab') }>
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
  button:{
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    color: 'white',
  }
});
