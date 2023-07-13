import { StyleSheet, View } from "react-native";
import RecordButton from "./NewRecordButton";

export default function NewRecordsArea() {
    return(
        <View style={styles.container}>
            <RecordButton isIncome={true} />
            <RecordButton isIncome={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 18,
    }
})