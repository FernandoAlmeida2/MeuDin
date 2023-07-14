import { View } from "react-native";
import { useSelector } from "react-redux";
import { useParams } from "react-router-native";
import { RootState } from "../../redux/store";
import UpdateRecordForm from "../../components/Forms/UpdateRecordForm";
import TextIcon from "../../components/TextIcon";
import { styles } from "./styles";

export default function UpdateRecord() {
    const { amount, description, type } = useSelector((state: RootState) => state.record);
    const { id } = useParams();
    const isIncome = type === "Income";

    return (
        <View style={styles.container}>
            <TextIcon text={`Editar ${isIncome ? "entrada" : "saída"}`} logoutIcon={false} />
            <UpdateRecordForm amount={amount} description={description} type={type} id={Number(id)} />
        </View>
    )
}