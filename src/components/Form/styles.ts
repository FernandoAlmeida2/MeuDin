import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const styles = (isLoading: boolean) => {
  return StyleSheet.create({
    view: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 15,
    },
    input: {
      opacity: isLoading ? 0.7 : 1,
      textDecorationColor: "#000000",
      width: 350,
      height: 62.5,
      borderRadius: 5,
      backgroundColor: "#fff",
      paddingLeft: 16,
      fontSize: 20,
      fontFamily: "Raleway_400Regular",
    },
    button: {
      width: 350,
      height: 62.5,
      borderRadius: 5,
      backgroundColor: "#A328D6",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Raleway_700Bold",
    },
    text: {
      fontFamily: "Raleway_700Bold",
      color: "#fff",
      fontSize: 20,
    },
  });
};
