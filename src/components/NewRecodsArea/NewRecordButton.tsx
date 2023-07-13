import { AntDesign } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigate } from "react-router-native";

type Props = {
  isIncome: boolean;
};

const RecordButton = ({ isIncome }: Props) => {
  const navigate = useNavigate();
  function onPress() {
    if (isIncome) navigate("/record/Income");
    else navigate("/record/Expense");
  }
  return (
    <View style={styles.button}>
      <Pressable onPress={onPress}>
        {isIncome ? (
          <AntDesign name="pluscircleo" size={24} color="white" />
        ) : (
          <AntDesign name="minuscircleo" size={24} color="white" />
        )}
      </Pressable>
      <Text style={styles.text}>
        {isIncome ? "Nova \nentrada" : "Nova  \nsaída"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 165,
    height: 130,
    borderRadius: 5,
    backgroundColor: "#A328D6",
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontFamily: "Raleway_700Bold",
    color: "#fff",
  },
});

export default RecordButton;
