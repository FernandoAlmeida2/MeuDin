import { useFonts, SairaStencilOne_400Regular } from "@expo-google-fonts/saira-stencil-one";
import { StyleSheet, Text } from "react-native";
import AppLoading from 'expo-app-loading';

export default function Logo() {
  const [fontsLoaded] = useFonts({
    SairaStencilOne_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } 

  return <Text style={style.text}>MyWallet</Text>;
}

const style = StyleSheet.create({
  text: {
    fontFamily: "SairaStencilOne_400Regular",
    color: "#fff",
    fontSize: 32,
  },
});
