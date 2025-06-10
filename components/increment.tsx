import { Pressable, Text} from "react-native";
import styles from './style';

interface IncrementButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export function IncrementButton({count, setCount}: IncrementButtonProps){

    return(
        <Pressable onPress={() => setCount(count + 1)} style={styles.Lab3tButton}>
            <Text>+</Text>
        </Pressable>
    );

}
