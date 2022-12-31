import React from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import TextField from '@mui/material/TextField';

const Notes = (props) => {
  const { contact } = props;
  const { messages } = useIntl();

  return (
    <Box
      sx={{
        pr: { xs: 5, lg: 8, xl: 10 },
        py: 5,
      }}
    >
      <Box
        component="h6"
        sx={{
          m: 2,
          fontWeight: Fonts.MEDIUM,
          fontSize: 16,
        }}
      >
        <IntlMessages id="common.notes" />
      </Box>

      <TextField
        multiline
        sx={{
          width: '100%',
        }}
        rows="4"
        placeholder={messages['common.notes']}
        name="notes"
        value={contact.notes}
        variant="outlined"
        disabled
      />
    </Box>
  );
};

export default Notes;

Notes.propTypes = {
  contact: PropTypes.object.isRequired,
};
