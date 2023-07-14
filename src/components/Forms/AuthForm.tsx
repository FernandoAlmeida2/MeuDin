import { useState } from "react";
import { TextInput, Pressable, View, Text, Alert } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import { changeName, changeToken } from "../../redux/userSlice";
import { signIn } from "../../services/authApi";
import { signUp } from "../../services/userApi";
import { styles } from "./styles";

type Props = {
  type: string;
};

export default function AuthForm({ type }: Props) {
  const intialBodyState = {
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  };
  const [bodyForm, setBodyForm] = useState(intialBodyState);

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function submitForm() {
    setLoading(true);

    try {
      if (type === "Login") {
        const response = await signIn(bodyForm);
        dispatch(changeName(response.data!.name));
        dispatch(changeToken(response.data!.token));
        //localStorage.setItem("userData", JSON.stringify(response.data));
        navigate("/home");
      } else {
        const response = await signUp(bodyForm);
        console.log(response);
        Alert.alert("Successful Registration!");
        navigate("/");
      }
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
      {type !== "Login" && (
        <TextInput
          placeholder="Nome"
          value={bodyForm.name}
          onChangeText={(text) => setBodyForm({ ...bodyForm, name: text })}
          style={styles(isLoading).input}
          editable={!isLoading}
          selectTextOnFocus={!isLoading}
        />
      )}
      <TextInput
        placeholder="E-mail"
        value={bodyForm.email}
        onChangeText={(text) => setBodyForm({ ...bodyForm, email: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Senha"
        value={bodyForm.password}
        onChangeText={(text) => setBodyForm({ ...bodyForm, password: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
        secureTextEntry={true}
      />
      {type !== "Login" && (
        <TextInput
          placeholder="Confirme a senha"
          value={bodyForm.repeatPassword}
          onChangeText={(text) =>
            setBodyForm({ ...bodyForm, repeatPassword: text })
          }
          style={styles(isLoading).input}
          editable={!isLoading}
          selectTextOnFocus={!isLoading}
          secureTextEntry={true}
        />
      )}

      <Pressable
        style={styles(isLoading).button}
        disabled={isLoading}
        onPress={submitForm}
      >
        <Text style={styles(isLoading).text}>
          {type === "Login" ? "Entrar" : "Cadastrar"}
        </Text>
      </Pressable>

      <Spinner
        visible={isLoading}
        textContent={"Carregando..."}
        textStyle={{color: "#FFF"}}
      />
    </View>
  );
}
