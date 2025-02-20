import React from "react";
import { render, screen } from "@testing-library/react-native";
import {
  DateTimeInputAndroid,
  DateTimeInputAndroidProps,
} from "./date-time-input-android";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

describe("Date Time Input Android", () => {
  let props: DateTimeInputAndroidProps;

  beforeEach(() => {
    props = {
      label: "Date label",
      mode: "date",
      value: "value",
      onUpdateValue: jest.fn(),
    };
  });

  it(`should render a label`, () => {
    render(<DateTimeInputAndroid {...props} />);
    expect(screen.getByText("Date label")).toBeTruthy();
  });
});
