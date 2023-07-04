import { useMemo } from "react";
import { StyleSheet } from "react-native";

export const styles = (isLoading: boolean) => {
  return StyleSheet.create({
    view: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
    },
    input: {
      opacity: isLoading ? 0.7 : 1,
      width: 350,
      height: 62.5,
      borderRadius: 5,
      backgroundColor: "#fff",
      paddingLeft: 16,
      fontSize: 20,
    },
    button: {
      width: 350,
      height: 62.5,
      borderRadius: 5,
      backgroundColor: "#fcac44",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    spinnerTextStyle: {
      color: "#FFF",
    },
    text: {
      color: "#fff",
      fontWeight: "700",
      fontSize: 20,
    },
  });
};
