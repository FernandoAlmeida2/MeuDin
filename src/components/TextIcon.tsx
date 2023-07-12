import { Pressable, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

type Props = {
  text: string;
  logoutIcon: boolean;
};

const TextIcon = ({ text, logoutIcon }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onPress() {
    dispatch(logout());
    navigate("/");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      {logoutIcon && (
        <Pressable onPress={onPress}>
          <AntDesign name="logout" size={24} color="white" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: 350,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        color: "#fff",
        fontSize: 25,
        fontFamily: "Raleway_700Bold"
    }
})

export default TextIcon;