import { useNavigate } from "react-router";

// TableData custom hook
export default function useTableData() {
  const navigate = useNavigate();

  const handleClickView = (vulnerability: any) => {
    navigate(`/vulnerability/${vulnerability.uuid}`, {
      state: { ...vulnerability, from: "/" },
    });
  };

  return { handleClickView };
}
