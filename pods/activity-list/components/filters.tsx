import { CustomColors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export const Filters = () => {
  return (
    <View style={styles.container}>
      <Text>Filters</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.primary100,
    padding: 20,
  },
  placeholder: {
    color: CustomColors.darkgrey,
  },
});
