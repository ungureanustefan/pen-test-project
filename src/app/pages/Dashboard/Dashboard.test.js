// Import: Packages
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import Dashboard from "./Dashboard.page";

// Test: Checks if Dashboard page renders
test("Dashboard component renders correctly", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const dashboardElement = screen.getByTestId("dashboard");
  expect(dashboardElement).toBeInTheDocument();
});
