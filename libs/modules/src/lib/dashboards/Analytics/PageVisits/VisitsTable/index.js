import React from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import PropTypes from 'prop-types';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import AppTableContainer from '@crema/components/AppTableContainer';

const VisitsTable = ({ visitsData }) => {
  const getData = (data) => {
    return data.slice(0, 11);
  };

  return (
    <AppTableContainer sxStyle={{ maxHeight: 530 }}>
      <Table stickyHeader className="table">
        <TableHead sx={{ borderBottom: '0 none' }}>
          <TableHeading />
        </TableHead>
        <TableBody sx={{ borderBottom: '0 none' }}>
          {getData(visitsData).map((data) => (
            <TableItem data={data} key={data.id} />
          ))}
        </TableBody>
      </Table>
    </AppTableContainer>
  );
};

export default VisitsTable;

VisitsTable.defaultProps = {
  visitsData: [],
};

VisitsTable.propTypes = {
  visitsData: PropTypes.array,
};
