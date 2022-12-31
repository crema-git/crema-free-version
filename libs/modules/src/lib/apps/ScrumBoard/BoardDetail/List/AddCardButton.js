import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types';
import { grey } from '@mui/material/colors';
import { Fonts } from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';

const AddCardButton = (props) => {
  return (
    <Card
      sx={{
        py: 2,
        px: 6,
        cursor: 'pointer',
        minWidth: 330,
      }}
      onClick={() => props.t(props.laneId)}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            backgroundColor: 'grey.100',
            border: `1px dashed ${grey[400]}`,
          }}
        >
          <AddIcon
            sx={{
              fontWeight: Fonts.LIGHT,
              color: 'grey.500',
            }}
          />
        </Avatar>
        <Box
          sx={{
            ml: 3.5,
            fontWeight: Fonts.REGULAR,
          }}
        >
          <IntlMessages id="scrumboard.addACard" />
        </Box>
      </Box>
    </Card>
  );
};

export default AddCardButton;

AddCardButton.propTypes = {
  t: PropTypes.func,
  laneId: PropTypes.number.isRequired,
};
