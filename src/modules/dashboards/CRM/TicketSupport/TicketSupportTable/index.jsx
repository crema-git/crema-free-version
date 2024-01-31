import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import PropTypes from "prop-types";
import TableHeading from "./TableHeading";
import TableItem from "./TableItem";
import AppTableContainer from "@crema/components/AppTableContainer";
import AppScrollbar from "@crema/components/AppScrollbar/index.jsx";

const TicketSupportTable = ({ ticketSupportData }) => {
  return (
    <AppTableContainer>
      <AppScrollbar style={{ maxHeight: 380 }}>
        <Table>
          <TableHead
            sx={{
              borderBottom: "0 none",
            }}
          >
            <TableHeading />
          </TableHead>
          <TableBody
            sx={{
              borderBottom: "0 none",
            }}
          >
            {ticketSupportData.map((row, index) => (
              <TableItem key={row.name + index} row={row} />
            ))}
          </TableBody>
        </Table>
      </AppScrollbar>
    </AppTableContainer>
  );
};

export default TicketSupportTable;

TicketSupportTable.defaultProps = {
  ticketSupportData: [],
};

TicketSupportTable.propTypes = {
  ticketSupportData: PropTypes.array,
};
