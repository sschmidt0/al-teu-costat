import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";

interface IconButtonProps {
  name: keyof typeof MaterialIcons.glyphMap;
  color: string;
}

export const IconButton: React.FC<IconButtonProps> = ({ name, color }) => {
  return <MaterialIcons name={name} size={24} color={color} />;
};
