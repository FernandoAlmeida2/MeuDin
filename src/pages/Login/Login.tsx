import { View } from "react-native";
import Form from "../../components/Form/Form";
import Logo from "../../components/Logo/Logo";
import TextLink from "../../components/TextLink/TextLink";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo />
      <Form type={"Login"} />
      <TextLink url="/signup" text="Primeira vez? Cadastre-se!" />
    </View>
  );
}
