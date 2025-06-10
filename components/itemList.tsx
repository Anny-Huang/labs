import { View, Text, Pressable } from "react-native";
import { router} from "expo-router";
const fruits = ['apple', 'orange', 'mango'];

export function ItemList() {
  return (
    <View style={{ padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10, marginTop: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Fruit List
      </Text>

      {fruits.map((fruit) => (
        <Pressable
          key={fruit}
          onPress={() => { router.push(`/${fruit}`); }}
        >
          <Text style={{ fontSize: 18, marginVertical: 5, color: 'blue' }}>
            {fruit}
          </Text>
        </Pressable>
      ))}   
    </View>
  );
}
