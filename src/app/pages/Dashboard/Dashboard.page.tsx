// Import: Packages
import React from "react";

// Import: Components
import { TableData } from "../../components";

// Import: Elements
import { DashboardContainer } from "./Dashboard.elements";

// Import: Custom Hooks
import useDashboard from "./useDashboard";

// Page: Dashboard
export default function Dashboard(): JSX.Element {
  const { vulnerabilitiesData = [], vulnerabilitiesFetchStatus = "" } =
    useDashboard();

  return (
    <DashboardContainer data-testid="dashboard-page">
      <h1>Dashboard</h1>
      <TableData
        data={vulnerabilitiesData}
        dataFetchStatus={vulnerabilitiesFetchStatus}
      />
    </DashboardContainer>
  );
}
