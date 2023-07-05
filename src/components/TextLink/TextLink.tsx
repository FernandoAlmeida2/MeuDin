import { StyleSheet, Text } from "react-native";
import { Link } from "react-router-native";

type Props = {
  url: string;
  text: string;
};

export default function TextLink({ url, text }: Props) {

  return (
    <Link to={url}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Raleway_700Bold",
    fontSize: 15,
    color: "#fff",
  },
});
