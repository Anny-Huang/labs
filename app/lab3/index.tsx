import { useState } from "react";
import { IncrementButton } from "../../components/increment";
import { DecrementButton} from "../../components/decrement";
import { View, Text, StyleSheet} from "react-native";
import styles from '../../components/style';

export default function CounterPage(){
    const [count, setCount] = useState<number>(0);
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: 'bold', borderRadius: 10, marginBottom: 20}}>Count: {count}</Text>
            <IncrementButton count={count} setCount={setCount}/>
            <DecrementButton count={count} setCount={setCount}/>         
        </View>
    );    

}
