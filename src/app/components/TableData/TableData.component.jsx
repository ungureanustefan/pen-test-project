// Import: Packages
// eslint-disable-next-line no-unused-vars
import React from "react";
import { PropTypes } from "prop-types";

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
export default function TableData({ data, dataFetchStatus }) {
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
              data.map((vulnerability) => {
                const { uuid, name, description, severity } = vulnerability;
                return (
                  <TR key={uuid}>
                    <TD>{name}</TD>
                    <TD>{description}</TD>
                    <TD severity={severity}>{severity}</TD>
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

TableData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      severity: PropTypes.string.isRequired,
    })
  ),
  dataFetchStatus: PropTypes.string.isRequired,
};
