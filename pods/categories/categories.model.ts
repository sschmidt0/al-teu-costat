import { CategoryType } from "@/models";
import { MaterialIcons } from "@expo/vector-icons";

export interface Category {
  id: CategoryType;
  icon: keyof typeof MaterialIcons.glyphMap;
  longText: string;
  shortText: string;
  title: string;
}
