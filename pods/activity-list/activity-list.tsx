import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "expo-router";
import { Category } from "../categories/categories.model";

import { ActivityCard } from "./components/activity-card";
import { Filters } from "./components/filters";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { CustomColors } from "@/constants/Colors";
import { ACTIVITIES } from "@/db/activities";

export interface ActivityListProps {
  category: Category;
}

export const ActivityList: React.FC<ActivityListProps> = ({ category }) => {
  const navigation = useNavigation();

  const filteredActivities = ACTIVITIES.filter(
    (activity) => activity.category === category.id
  );
  const hasActivities = filteredActivities.length;

  React.useEffect(() => {
    navigation.setOptions({
      title: category.title,
    });
  }, [navigation]);

  return (
    <ScrollView>
      <View style={styles.parentContainer}>
        <View style={styles.upperContainer}>
          <MaterialIcons
            style={styles.icon}
            name={category.icon}
            size={60}
            color={CustomColors.darkgrey}
          />
          <Text style={styles.title}>{category.title}</Text>
          <Text style={styles.subtitle}>{category.shortText}</Text>
          <Text style={styles.description}>{category.longText}</Text>
          {hasActivities ? (
            <Text style={styles.quantity}>
              {`Hi ha ${filteredActivities.length} activitats en aquesta categoria`}
            </Text>
          ) : (
            <Text>Encara no hi ha activitats en aquesta categoria</Text>
          )}
        </View>

        {hasActivities ? (
          <View style={styles.filterActivitiesContainer}>
            <Filters />
            <View>
              {filteredActivities.map((activity) => (
                <ActivityCard
                  key={activity.id}
                  activity={activity}
                  icon={category.icon}
                />
              ))}
            </View>
          </View>
        ) : (
          <View style={styles.noContent}>
            <Text style={styles.noContentText}>
              Vaja, encara no hi ha activitats d'aquesta categoria. Per què no
              en proposes una?
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    gap: 30,
    paddingHorizontal: 12,
    paddingBottom: 20,
  },
  upperContainer: {
    gap: 12,
    width: "100%",
  },
  filterActivitiesContainer: {
    gap: 30,
  },
  icon: {
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    color: CustomColors.primary800,
    textAlign: "center",
  },
  subtitle: {
    lineHeight: 20,
    fontWeight: 200,
  },
  description: {
    lineHeight: 20,
    color: CustomColors.darkgrey,
  },
  quantity: {
    fontSize: 12,
  },
  noContent: {
    padding: 80,
  },
  noContentText: {
    color: CustomColors.primary700,
    textAlign: "center",
  },
});
