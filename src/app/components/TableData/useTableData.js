import { useNavigate } from "react-router";

// TableData custom hook
export default function useTableData() {
  const navigate = useNavigate();

  const handleClickView = (vulnerability) => {
    navigate(`/vulnerability/${vulnerability.uuid}`, {
      state: { ...vulnerability, from: "/" },
    });
  };

  return { handleClickView };
}
