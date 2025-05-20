import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Pressable} from 'react-native';

export default function App() {
 let sampleList = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Doe' },
  { id: 4, name: 'Smith' },
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
