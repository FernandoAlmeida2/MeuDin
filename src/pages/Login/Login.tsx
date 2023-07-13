import { View } from "react-native";
import AuthForm from "../../components/Forms/AuthForm";
import Logo from "../../components/Logo/Logo";
import TextLink from "../../components/TextLink/TextLink";
import { styles } from "./styles";

export default function Login() {
  return (
    <View style={styles.container}>
      <Logo />
      <AuthForm type={"Login"} />
      <TextLink url="/signup" text="Primeira vez? Cadastre-se!" />
    </View>
  );
}
