import React from "react";
import { render, screen } from "@testing-library/react-native";
import { CATEGORIES } from "./categories.business";
import { CategoriesContainer } from "./categories.container";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("Categories Container", () => {
  const categoriesLength = CATEGORIES.length;

  it(`should render ${categoriesLength} links`, () => {
    render(<CategoriesContainer />);
    const links = screen.getAllByRole("link");
    expect(links.length).toBe(CATEGORIES.length);
    expect(screen.getByText(CATEGORIES[0].title)).toBeTruthy();
  });
});
