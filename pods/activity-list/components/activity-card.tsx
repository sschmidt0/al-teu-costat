import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { ActivityType } from "../activity-list.model";

import { Link } from "expo-router";
import { CustomColors } from "@/constants/Colors";
import { formatDateTimeActivityCard } from "@/utilities";

import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export interface ActivityCardProps {
  activity: ActivityType;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({
  activity,
  icon,
}) => {
  const date = formatDateTimeActivityCard(activity.time);
  const assistantsPlace = `${activity.assistants} assistiran  •  ${activity.city}`;
  const pathname = `/[activity]`;

  return (
    <Link
      href={{
        pathname: pathname,
        params: {
          id: activity?.id,
          activity: activity?.title,
          assistants: activity?.assistants,
          association: activity?.association,
          category: activity?.category,
          city: activity?.city,
          time: activity?.time.toISOString(),
          title: activity?.title,
        },
      }}
      asChild
    >
      <Pressable style={({ pressed }) => [pressed && styles.pressed]}>
        <Card size="sm" variant="elevated" style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.activityIcon}>
              <MaterialIcons
                name={icon}
                size={28}
                color={CustomColors.primary800}
              />
            </View>
            <View>
              <Text>{date}</Text>
              <Heading size="xl" style={styles.title}>
                {activity.title}
              </Heading>
              {activity?.association && <Text>{activity.association}</Text>}
              <Text size="xs" style={styles.assistants}>
                {assistantsPlace}
              </Text>
            </View>
          </View>
        </Card>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
    marginVertical: 4,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderColor: CustomColors.primary100,
    borderWidth: 1,
    // backgroundColor: CustomColors.primary100,
    borderRadius: 8,
  },
  innerContainer: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  association: {
    fontSize: 16,
    fontWeight: 300,
  },
  assistants: {
    marginTop: 8,
    fontWeight: 400,
  },
  activityIcon: {
    alignSelf: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
