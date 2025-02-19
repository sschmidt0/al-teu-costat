import { CustomColors } from "@/constants/Colors";
import { Categories } from "@/pods/categories";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Categories />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  outerContainer: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: CustomColors.primary900,
  },
});
