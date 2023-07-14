import { useState } from "react";
import { TextInput, Pressable, View, Text, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-native";
import { RootState } from "../../../redux/store";
import { saveRecord } from "../../../services/recordApi";
import { styles } from "./styles";

type Props = {
  type: "Income" | "Expense";
};

export default function NewRecordForm({ type }: Props) {
  const intialBodyState = {
    amount: "",
    description: "",
    type,
  };
  const [bodyForm, setBodyForm] = useState(intialBodyState);

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { token } = useSelector((state: RootState) => state.user);

  async function submitForm() {
    setLoading(true);

    try {
      await saveRecord(
        { ...bodyForm, amount: Math.round(Number(bodyForm.amount.replace(",", "."))*100)},
        token
      );
      navigate("/home");
    } catch (error) {
      Alert.alert(`Unable to ${type}`);
      console.log(error);
    } finally {
      setLoading(false);
      setBodyForm(intialBodyState);
    }
  }

  return (
    <View style={styles(isLoading).view}>
      <TextInput
        placeholder="Valor"
        value={bodyForm.amount}
        onChangeText={(text) => setBodyForm({ ...bodyForm, amount: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />
      <TextInput
        placeholder="Descrição"
        value={bodyForm.description}
        onChangeText={(text) => setBodyForm({ ...bodyForm, description: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />

      <Pressable
        style={styles(isLoading).button}
        disabled={isLoading}
        onPress={submitForm}
      >
        <Text style={styles(isLoading).text}>
          {type === "Income" ? "Salvar entrada" : "Salvar saída"}
        </Text>
      </Pressable>

      <Spinner
        visible={isLoading}
        textContent={"Carregando..."}
        textStyle={{ color: "#FFF" }}
      />
    </View>
  );
}
