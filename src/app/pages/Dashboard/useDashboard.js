// Import: Packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import: Redux Actions
import { getVulnerabilities } from "../../../redux/slices/VulnerabilitiesSlice";

export default function useDashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVulnerabilities());
  }, [dispatch]);

  const { data } = useSelector(
    (state) => state.vulnerabilities.vulnerabilitiesData
  );
  const { vulnerabilitiesFetchStatus } = useSelector(
    (state) => state.vulnerabilities
  );

  return { data, vulnerabilitiesFetchStatus };
}
