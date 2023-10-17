import React from 'react';
import {DatePicker} from '@mui/x-date-pickers';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const AppDatePicker = ({date, setDate}) => {
  return (
    <Box
      sx={{
        ml: {xs: 0, sm: 5},
        mt: {xs: 2, sm: 0},
      }}
    >
      <DatePicker
        label={<IntlMessages id='common.startDate' />}
        value={date}
        onChange={(newValue) => setDate(newValue)}
      />
    </Box>
  );
};

export default AppDatePicker;

AppDatePicker.propTypes = {
  date: PropTypes.object.isRequired,
  setDate: PropTypes.func,
};
