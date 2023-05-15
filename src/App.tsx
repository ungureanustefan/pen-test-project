// Import: Packages
import React from "react";
import { Route, Routes } from "react-router-dom";

// Import: Pages
import { Dashboard, Vulnerability } from "./app/pages";

// Component: App
function App() {
  return (
    <div data-testid={"application"}>
      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route
          path={"/vulnerability/:vulnerabilityID"}
          element={<Vulnerability />}
        />
      </Routes>
    </div>
  );
}

export default App;
