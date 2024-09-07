import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../../src/App";

describe("Test in the App.tsx Component", () => {
  it("should render the component correctly ", () => {
    render(<App />);

    const componentCounter = screen.getByTestId("button-count");
    const titleComponentApp = screen.getByRole("heading", { level: 1 });
    expect(titleComponentApp.textContent).toBe("Vite + React");
    expect(componentCounter).toBeInTheDocument();

    fireEvent.click(componentCounter);

    expect(componentCounter.textContent).toContain("1");
  });
});