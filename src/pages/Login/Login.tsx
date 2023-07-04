import { Text, View } from "react-native";
import { Link } from "react-router-native";
import Form from "../../components/Form/Form";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
        <Form type={"Login"} />
    </View>
  );
}
