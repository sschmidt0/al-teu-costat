import React from "react";
import { Ionicons } from "@expo/vector-icons";

export interface Props {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
}

export const TabBarIcon: React.FC<Props> = ({ name, color }) => {
  return <Ionicons name={name} size={20} color={color} />;
};
