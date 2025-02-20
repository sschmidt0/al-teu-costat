import React from "react";
import { Tabs } from "expo-router";

import { CustomColors } from "@/constants/Colors";
import { TabBarIcon } from "@/components/atoms";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTintColor: CustomColors.white,
        headerStyle: {
          backgroundColor: CustomColors.primary900,
        },
        tabBarActiveTintColor: CustomColors.primary300,
        tabBarInactiveTintColor: CustomColors.white,
        tabBarStyle: { backgroundColor: CustomColors.primary900 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => <TabBarIcon name="apps" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notificacions",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="notifications-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => <TabBarIcon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
