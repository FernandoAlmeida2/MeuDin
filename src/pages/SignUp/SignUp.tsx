import { View } from "react-native";
import Form from "../../components/Form/Form";
import Logo from "../../components/Logo/Logo";
import TextLink from "../../components/TextLink/TextLink";
import { styles } from "./styles";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Logo />
      <Form type={"Sign up"} />
      <TextLink url="/" text="Já tem uma conta? Entre agora!" />
    </View>
  );
}
