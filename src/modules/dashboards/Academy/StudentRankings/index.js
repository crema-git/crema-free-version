import React from 'react';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppCard from '@crema/components/AppCard';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import AppTableContainer from '@crema/components/AppTableContainer';
import TableHeading from './TableHeading';
import TableItem from './TableItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const StudentRankings = ({studentRankings}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['academy.studentRankings']}
      contentStyle={{px: 0}}
      action={
        <IconButton
          sx={{
            height: 30,
            width: 30,
          }}
          aria-label='more'
          aria-controls='long-menu'
          aria-haspopup='true'
          onClick={null}
        >
          <MoreVertIcon />
        </IconButton>
      }
    >
      <AppTableContainer>
        <Table className='table'>
          <TableHead>
            <TableHeading />
          </TableHead>
          <TableBody>
            {studentRankings.map((data) => (
              <TableItem data={data} key={data.id} />
            ))}
          </TableBody>
        </Table>
      </AppTableContainer>
    </AppCard>
  );
};

export default StudentRankings;

StudentRankings.propTypes = {
  studentRankings: PropTypes.array,
};
