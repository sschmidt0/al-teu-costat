import React from "react";
import { render, screen } from "@testing-library/react-native";
import { DateTimeInputIos, DateTimeInputIosProps } from "./date-time-input-ios";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("Date Time Input IOS", () => {
  let props: DateTimeInputIosProps;

  beforeEach(() => {
    props = {
      label: "Date label",
      mode: "date",
      value: "value",
      onUpdateValue: jest.fn(),
    };
  });

  it(`should render a label`, () => {
    render(<DateTimeInputIos {...props} />);
    expect(screen.getByText("Date label")).toBeTruthy();
  });
});
