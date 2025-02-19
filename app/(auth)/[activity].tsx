import React from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text } from "react-native";

const ActivityDetailView = () => {
  const { activity } = useLocalSearchParams();
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: activity,
    });
  }, [navigation]);

  return <Text>{activity}</Text>;
};

export default ActivityDetailView;
