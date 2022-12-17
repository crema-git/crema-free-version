import React from 'react';
import {DatePicker} from '@mui/x-date-pickers';
import IntlMessages from '@crema/utility/IntlMessages';
import moment from 'moment';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {TextField} from '@mui/material';

const AppDatePicker = ({date, setDate}) => {
  return (
    <Box
      sx={{
        ml: {xs: 0, sm: 5},
        mt: {xs: 2, sm: 0},
      }}
    >
      <DatePicker
        autoOk
        format='YYYY/MM/DD'
        variant='inline'
        inputVariant='outlined'
        label={<IntlMessages id='common.startDate' />}
        name='date'
        sx={{
          marginTop: 0,
        }}
        value={date}
        renderInput={(params) => <TextField {...params} />}
        onChange={(value) => setDate(moment(value).format('lll'))}
      />
    </Box>
  );
};

export default AppDatePicker;

AppDatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func,
};
