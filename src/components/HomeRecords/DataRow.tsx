import dayjs from "dayjs";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { deleteRecord, RecordType } from "../../services/recordApi";
import { AntDesign } from "@expo/vector-icons";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-native";
import {
  changeAmount,
  changeDescription,
  changeType,
} from "../../redux/recordSlice";

type Props = {
  record: RecordType;
  refreshRecords: Function;
};

const DataRow = ({ record, refreshRecords }: Props) => {
  const isIncome = record.type === "Income";
  const { token } = useSelector((state: RootState) => state.user);
  const [isLoading, setLoading] = useState(false);
  const amountLength = record.amount.toString().length;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function onPressDelete() {
    setLoading(true);

    try {
      await deleteRecord(record.id, token);
    } catch (error) {
      Alert.alert(`Unable to delete the record`);
      console.log(error);
    } finally {
      setLoading(false);
      refreshRecords();
    }
  }

  function onPressUpdate() {
    dispatch(changeAmount(record.amount));
    dispatch(changeDescription(record.description));
    dispatch(changeType(record.type));

    navigate(`../record/update/${record.id}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowDirection}>
        <Text style={[styles.text, styles.dateText]}>
          {dayjs(record.createdAt).format("DD/MM")}{" "}
        </Text>
        <Pressable onPress={onPressUpdate}>
          <Text style={styles.text}>
            {" "}
            {amountLength > 5
              ? record.description.slice(0, 14)
              : record.description.slice(0, 16)}
          </Text>
        </Pressable>
      </View>
      <View style={styles.rowDirection}>
        <Text
          style={[
            styles.text,
            isIncome ? styles.incomeType : styles.expenseType,
          ]}
        >
          {(record.amount / 100).toFixed(2).replace(".", ",")}
          {"  "}
        </Text>
        <Pressable style={[styles.closeIcon]} onPress={onPressDelete}>
          <AntDesign name="close" size={16} color="#c6c6c6" />
        </Pressable>
      </View>
      <Spinner
        visible={isLoading}
        textContent={"Carregando..."}
        textStyle={{ color: "#FFF" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 5,
  },
  rowDirection: {
    flexDirection: "row",
    alignItems: "center",
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
  closeIcon: {
    marginTop: 7,
  },
});

export default DataRow;
