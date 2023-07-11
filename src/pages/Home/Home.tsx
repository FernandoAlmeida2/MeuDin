import { useEffect, useState } from "react";
import { Alert, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useSelector } from "react-redux";
import { Link } from "react-router-native";
import { RootState } from "../../../redux/store";
import { getRecords, RecordType } from "../../../services/recordApi";
import { styles } from "./styles";

export default function Home() {
  const { name, token } = useSelector((state: RootState) => state.user);
  const initialRecord: RecordType[] = [];
  const [recordData, setRecordData] = useState(initialRecord);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getRecords(token)
      .then((res) => setRecordData(res.data!))
      .catch((error) => {
        Alert.alert(`Unable to get the records`);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <Link to="/signup">
        <Text>
          Bem vindo, {name}! Seu token é {token}
        </Text>
      </Link>
      <Spinner
        visible={isLoading}
        textContent={"Carregando registros..."}
        textStyle={{color: "#FFF"}}
      />
    </View>
  );
}
