// Import: Packages
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, AnyAction } from "redux";

// Import: Redux Actions
import { getVulnerabilities } from "../../../redux/slices/VulnerabilitiesSlice";

export default function useDashboard() {
  const dispatch: Dispatch<AnyAction> = useDispatch();

  useEffect(() => {
    dispatch(getVulnerabilities() as any);
  }, [dispatch]);

  const { vulnerabilitiesData, vulnerabilitiesFetchStatus } = useSelector(
    (state: any) => state.vulnerabilities
  );

  return { vulnerabilitiesData, vulnerabilitiesFetchStatus };
}
