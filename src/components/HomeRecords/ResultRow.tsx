import dayjs from "dayjs";
import { StyleSheet, Text, View } from "react-native";
import { RecordType } from "../../../services/recordApi";

type Props = {
  sumBalance: number;
};

const ResultRow = ({ sumBalance }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}> SALDO</Text>

      <Text
        style={[
          styles.sumText,
          sumBalance < 0 ? styles.positiveSum : styles.negativeSum,
        ]}
      >
        {sumBalance.toFixed(2).replace(".", ",")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  totalText: {
    fontFamily: "Raleway_700Bold",
    fontSize: 20,
  },
  sumText: {
    fontFamily: "Raleway_400Regular",
    fontSize: 20,
  },
  positiveSum: {
    color: "#03AC00",
  },
  negativeSum: {
    color: "#C70000",
  },
});

export default ResultRow;
