import { View, Text } from "react-native";
import { Link } from "expo-router";
const fruits = ['apple', 'orange', 'mango'];

export function ItemList() {
  return (
    <View style={{ padding: 20, backgroundColor: '#f9f9f9', borderRadius: 10, marginTop: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
        Fruit List
      </Text>

      {fruits.map((fruit, index) => (
        <Link key={index} href={`/${fruit}`}>
          <Text style={{ fontSize: 18, marginVertical: 5 }}>{fruit}</Text>
        </Link>
      ))}
    </View>
  );
}
