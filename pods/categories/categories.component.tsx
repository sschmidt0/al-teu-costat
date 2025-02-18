import { View, Dimensions, StyleSheet } from "react-native";
import { CATEGORIES } from "./categories.business";
import { CategoryButton } from "./components/category-button";

export const Categories = () => {
  const { width, height } = Dimensions.get("window");
  const squareSize = Math.min(width, height) / 2.5; // Tamaño de los cuadrados

  return (
    <View style={styles.container}>
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category.id}
          id={category.id}
          icon={category.icon}
          longText={category.longText}
          squareSize={squareSize}
          shortText={category.shortText}
          title={category.title}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 12,
    padding: 12,
  },
});
