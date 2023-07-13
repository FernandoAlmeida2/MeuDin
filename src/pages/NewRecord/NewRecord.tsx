import { View } from "react-native";
import { useParams } from "react-router-native";
import NewRecordForm from "../../components/Forms/NewRecordForm";
import TextIcon from "../../components/TextIcon";
import { styles } from "./styles";

export default function NewRecord() {
    const { type } = useParams();
    const isIncome = type === "Income";
    return (
        <View style={styles.container}>
            <TextIcon text={`Nova ${isIncome ? "entrada" : "saída"}`} logoutIcon={false} />
            <NewRecordForm type={isIncome ? "Income" : "Expense"} />
        </View>
    )
}