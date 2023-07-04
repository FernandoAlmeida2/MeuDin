import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { styles } from "./styles";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Link to="/">
        <Text>Deu ótimo!</Text>
      </Link>
    </View>
  );
}
