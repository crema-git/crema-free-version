import React from "react";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import AppScrollbar from "@crema/components/AppScrollbar";

const PatientsTable = ({ recentPatients = [[]] }) => {
  return (
    <AppTableContainer>
      <AppScrollbar>
        <Table>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {recentPatients.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default PatientsTable;

PatientsTable.propTypes = {
  recentPatients: PropTypes.array,
};
