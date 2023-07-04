import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import SignUp from "./src/pages/SignUp/SignUp";

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Routes>
          <Route path="/" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/home" Component={Home} />
        </Routes>

        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f99007",
    alignItems: "center",
    justifyContent: "center",
  },
});
