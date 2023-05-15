// Import: Packages
import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import App from "./App";

// Test: Checks if App page renders
test("App component renders correctly", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const appElement = screen.getByTestId("application");
  expect(appElement).toBeInTheDocument();
});
