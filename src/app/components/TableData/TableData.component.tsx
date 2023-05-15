// Import: Packages
import React from "react";

// Import: Components
import Button from "../Button/Button.component";

// Import: Elements
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableHeadTR,
  TD,
  TH,
  TR,
} from "./TableData.elements";

// Import: Custom Hooks
import useTableData from "./useTableData";

// Component: TableData
interface Vulnerability {
  uuid: string;
  name: string;
  description: string;
  severity: string;
  // Adjust the types of other properties according to your data structure
}

interface TableDataProps {
  data: Vulnerability[];
  dataFetchStatus: "pending" | "rejected" | "fulfilled" | null;
}

export default function TableData({ data, dataFetchStatus }: TableDataProps) {
  const { handleClickView } = useTableData();

  return (
    <TableContainer data-testid="table-data">
      <Table>
        <TableHead>
          <TableHeadTR>
            <TH>VULNERABILITY NAME</TH>
            <TH>DESCRIPTION</TH>
            <TH>SEVERITY</TH>
            <TH></TH>
          </TableHeadTR>
        </TableHead>
        <TableBody>
          {dataFetchStatus === "pending" ? (
            <TR>
              <TD colSpan={4}>Loading...</TD>
            </TR>
          ) : dataFetchStatus === "rejected" ? (
            <TR>
              <TD colSpan={4}>Error</TD>
            </TR>
          ) : dataFetchStatus === "fulfilled" ? (
            data?.length > 0 ? (
              data.map((vulnerability: Vulnerability) => {
                return (
                  <TR key={vulnerability.uuid}>
                    <TD>{vulnerability.name}</TD>
                    <TD>{vulnerability.description}</TD>
                    <TD severity={vulnerability.severity}>
                      {vulnerability.severity}
                    </TD>
                    <TD>
                      <Button
                        handleClick={() => handleClickView(vulnerability)}
                      >
                        View
                      </Button>
                    </TD>
                  </TR>
                );
              })
            ) : (
              <TR>
                <TD>No data</TD>
              </TR>
            )
          ) : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
