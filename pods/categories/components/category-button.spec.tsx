import React from "react";
import { render, screen } from "@testing-library/react-native";
import { CategoryButton, CategoryButtonProps } from "./category-button";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");
jest.mock("react-native/Libraries/Linking/Linking", () => ({
  openURL: jest.fn().mockResolvedValue(null),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));

describe("CategoryButton Component", () => {
  let props: CategoryButtonProps;
  beforeEach(() => {
    props = {
      id: "sports",
      icon: "sports",
      longText: "This is a long text for testing.",
      squareSize: 100,
      shortText: "Short text",
      title: "Test Title",
    };
  });

  it("should render correctly with given props", () => {
    render(<CategoryButton {...props} />);

    expect(screen.getByText(props.title)).toBeTruthy();
    expect(screen.getByRole("link")).toBeTruthy();
  });

  //   it.only("should navigate to the correct path when pressed", () => {
  //     render(<CategoryButton {...props} />);

  //     const link = screen.getAllByRole("link")[0];
  //     fireEvent.press(link);

  //     expect(link.props.href).toEqual({
  //       pathname: "/activity-list-view",
  //       params: {
  //         id: props.id,
  //         icon: props.icon,
  //         longText: props.longText,
  //         shortText: props.shortText,
  //         title: props.title,
  //       },
  //     });
  //   });
});
