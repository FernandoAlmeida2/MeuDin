import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
        <Link to="/signup" >
            <Text>Deu bom!</Text>
        </Link>     
    </View>
  );
}
