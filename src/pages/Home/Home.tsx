import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import { Link } from "react-router-native";
import { RootState } from "../../../redux/store";
import { styles } from "./styles";

export default function Home() {
  const {name, token} = useSelector((state: RootState) => state.user);
  return (
    <View style={styles.container}>
        <Link to="/signup" >
            <Text>Bem vindo, {name}! Seu token é {token}</Text>
        </Link>     
    </View>
  );
}