import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../../../src/components/Counter";

describe("Test in the Counter.tsx Component", () => {
  it("should render the component correctly", () => {
    render(<Counter />);

    const buttonCounter = screen.getByTestId("button-count");

    fireEvent.click(buttonCounter);

    expect(buttonCounter.textContent).toContain("1");
  });
});