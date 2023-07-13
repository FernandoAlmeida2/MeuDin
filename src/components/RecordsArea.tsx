import { ScrollView, Text, View } from "react-native";
import { RecordType } from "../../services/recordApi";
import { StyleSheet } from "react-native";

type Props = {
  recordData: RecordType[];
};

export default function RecordsArea({ recordData }: Props) {
  const isData = recordData.length === 0;
  return (
    <View style={styles.container}>
      {isData ? (
        <Text style={styles.text}>
          Não há registros de
          {"\n"}
          entrada ou saída
        </Text>
      ) : (
        <ScrollView contentContainerStyle={styles.recordsList}>
          {recordData.map((record) => (
            <Text key={record.id}>{record.amount}</Text>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 350,
    height: 580,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  recordsList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 350,
    height: 480,
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
    fontFamily: "Raleway_400Regular",
    fontSize: 20,
    color: "#868686",
  },
});
