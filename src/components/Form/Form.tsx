import { useState } from "react";
import { TextInput, Pressable, View, Text } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useNavigate } from "react-router-native";
import { styles } from "./styles";

type Props = {
  type: string;
};

export default function Form({ type }: Props) {
  const [bodyForm, setBodyForm] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();


  async function submitForm() {
    setLoading(true);
    //navigate("/home");
    /* try {
        if (type === "Login") {
          const response = await signIn(bodyForm);
          setUserData(response);
          //localStorage.setItem("userData", JSON.stringify(response.data));
          toast("Successful Login!");
          navigate("/menu");
        } else {
          await signUp(bodyForm);
          toast("Successful Registration!");
          navigate("/");
        }
      } catch (error) {
        toast(`Unable to ${type}`);
        //console.log(error)
      } finally {
        setLoading(false);
      } */
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
      />
      <TextInput
        placeholder="Senha"
        value={bodyForm.password}
        onChangeText={(text) => setBodyForm({ ...bodyForm, password: text })}
        style={styles(isLoading).input}
        editable={!isLoading}
        selectTextOnFocus={!isLoading}
      />
      {type !== "Login" && (
        <TextInput
          placeholder="Confirme a senha"
          value={bodyForm.repeat_password}
          onChangeText={(text) =>
            setBodyForm({ ...bodyForm, repeat_password: text })
          }
          style={styles(isLoading).input}
          editable={!isLoading}
          selectTextOnFocus={!isLoading}
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
        textStyle={styles(isLoading).spinnerTextStyle}
      />
    </View>
  );
}
