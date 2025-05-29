import { View, Text, Image } from 'react-native';
import { Link } from 'expo-router';

export default function ApplePage() {
  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Apple</Text>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/92/95apple.jpeg' }}
        style={{ width: 300, height: 200, borderRadius: 10 }}
      />
      <Link href="https://upload.wikimedia.org/wikipedia/commons/9/92/95apple.jpeg" style={{ marginTop: 20, color: 'blue', fontSize: 18 }}>       
        <Text style={{ fontSize: 18, marginVertical: 5 }}> Image Source Link</Text>
      </Link>
      <Link href="/" style={{ marginTop: 20, color: 'blue', fontSize: 18 }}>       
        <Text style={{ fontSize: 18, marginVertical: 5 }}> Back to Home</Text>
      </Link>

    </View>
  );
}
