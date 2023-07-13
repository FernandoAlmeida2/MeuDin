import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";
import { RecordType } from "../../../services/recordApi";

type Props = {
  record: RecordType;
};

const DataRow = ({ record }: Props) => {
  const isIncome = record.type === "Income";
  return (
    <View style={styles.container}>
      <View style={styles.dateDescription}>
        <Text style={[styles.text, styles.dateText]}>
          {dayjs(record.createdAt).format("DD/MM")}{" "}
        </Text>
        <Text style={styles.text}> {record.description}</Text>
      </View>
      <Text
        style={[styles.text, isIncome ? styles.incomeType : styles.expenseType]}
      >
        {record.amount.toFixed(2).replace(".", ",")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5
  },
  dateDescription: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "Raleway_400Regular",
    fontSize: 18,
  },
  dateText: {
    color: "#c6c6c6",
  },
  incomeType: {
    color: "#03AC00",
  },
  expenseType: {
    color: "#C70000",
  },
});

export default DataRow;
