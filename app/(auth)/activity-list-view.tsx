import { StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Category } from "../../pods/categories/categories.model";
import { ActivityList } from "@/pods/activity-list";

const ActivityListView = () => {
  const params = useLocalSearchParams();
  const category = {
    id: params.id,
    icon: params.icon,
    longText: params.longText,
    shortText: params.shortText,
    title: params.title,
  } as Category;

  return (
    <SafeAreaView style={styles.container}>
      <ActivityList category={category} />
    </SafeAreaView>
  );
};

export default ActivityListView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
