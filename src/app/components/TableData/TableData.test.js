// Import: Packages
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// Import: Component
import TableData from "./TableData.component";

// Test: Checks if TableData component renders
test("TableData component renders correctly", () => {
  render(
    <Router>
      <TableData dataFetchStatus="" />
    </Router>
  );
  const tableDataElement = screen.getByTestId("table-data");
  expect(tableDataElement).toBeInTheDocument();
});
