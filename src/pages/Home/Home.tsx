import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { getRecords, RecordType } from "../../../services/recordApi";
import NewRecordsArea from "../../components/NewRecodsArea/NewRecordsArea";
import RecordsArea from "../../components/RecordsArea";
import TextIcon from "../../components/TextIcon";
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

  if (isLoading)
    return <Spinner visible={true} textContent={"Carregando registros..."} />;

  return (
    <View style={styles.container}>
      <TextIcon text={`Olá, ${name}`} logoutIcon={true} />
      <RecordsArea recordData={recordData} />
      <NewRecordsArea />
    </View>
  );
}
