import { Pressable, Text} from "react-native";
import styles from './style';

interface DecrementButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function DecrementButton({count, setCount}: DecrementButtonProps){

    return(
        <Pressable onPress={() => setCount(count - 1)} style={styles.Lab3tButton}>
            <Text>-</Text>
        </Pressable>
    );

}