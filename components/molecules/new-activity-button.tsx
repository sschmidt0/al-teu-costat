import { Link } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { CustomColors } from "../../constants/Colors";
import { IconButton } from "../atoms";

export const NewActivityButton = () => {
  return (
    <Link href="/new-activity-view" asChild style={styles.container}>
      <Pressable>
        <IconButton color={CustomColors.white} name="add" />
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
  },
});
