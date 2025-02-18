import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Categories } from "./categories.component";
import { CATEGORIES } from "./categories.business";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("Categories Component", () => {
  const categoriesLength = CATEGORIES.length;

  it(`should render ${categoriesLength} buttons`, () => {
    render(<Categories />);
    const categoryButtons = screen.getAllByRole("link");
    expect(categoryButtons.length).toBe(CATEGORIES.length);
  });
});
