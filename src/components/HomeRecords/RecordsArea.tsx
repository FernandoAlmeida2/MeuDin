import { ScrollView, Text, View } from "react-native";
import { RecordType } from "../../../services/recordApi";
import { StyleSheet } from "react-native";
import DataRow from "./DataRow";
import ResultRow from "./ResultRow";

type Props = {
  recordData: RecordType[];
};

export default function RecordsArea({ recordData }: Props) {
  const noData = recordData.length === 0;
  const sumBalance = recordData.reduce(
    (previous, current) =>
      current.type === "Income"
        ? previous + Number(current.amount)
        : previous - Number(current.amount),
    0
  );

  return (
    <View style={[styles.container, noData ? styles.noContent : styles.anyContent]}>
      {noData ? (
        <Text style={styles.text}>
          Não há registros de
          {"\n"}
          entrada ou saída
        </Text>
      ) : (
        <ScrollView contentContainerStyle={styles.recordsList}>
          {recordData.map((record) => (
            <DataRow record={record} key={record.id} />
          ))}
        </ScrollView>
      )}
      {!noData && <ResultRow sumBalance={sumBalance} />}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 350,
    height: 580,
    borderRadius: 10,
  },
  noContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  anyContent: {
    justifyContent: "space-between",
  },
  recordsList: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: 350,
    height: 480,
  },
  text: {
    textAlign: "center",
    fontFamily: "Raleway_400Regular",
    fontSize: 20,
    color: "#868686",
  },
});
