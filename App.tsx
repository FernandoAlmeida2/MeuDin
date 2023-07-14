import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/pages/Home/Home";
import Login from "./src/pages/Login/Login";
import SignUp from "./src/pages/SignUp/SignUp";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Raleway_400Regular,
  Raleway_700Bold,
} from "@expo-google-fonts/raleway";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import NewRecord from "./src/pages/NewRecord/NewRecord";
import UpdateRecord from "./src/pages/UpdateRecord/UpdateRecord";

export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Routes>
            <Route path="/" Component={Login} />
            <Route path="/signup" Component={SignUp} />
            <Route path="/home" Component={Home} />
            <Route path="/record/:type" Component={NewRecord} />
            <Route path="/record/update/:id" Component={UpdateRecord} />
          </Routes>

          <StatusBar style="auto" />
        </View>
      </NativeRouter>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8C11BE",
  },
});
