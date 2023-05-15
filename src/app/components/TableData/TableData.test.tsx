// Import: Packages
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import TableData from "./TableData.component";

// Test: Checks if TableData component renders
test("TableData component renders correctly", () => {
  render(
    <Router>
      <TableData dataFetchStatus={null} data={[]} />
    </Router>
  );
  const tableDataElement = screen.getByTestId("table-data");
  expect(tableDataElement).toBeInTheDocument();
});
