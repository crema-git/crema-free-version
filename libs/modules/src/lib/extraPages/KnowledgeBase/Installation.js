import React from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import KBItem from './KBItem';
import AppGridContainer from '@crema/components/AppGridContainer';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';

const Installation = ({ installationQueries }) => {
  return (
    <Box mb={2}>
      <Box
        component="h3"
        color="text.primary"
        mb={{ xs: 4, lg: 6 }}
        fontSize={16}
        fontWeight={Fonts.BOLD}
      >
        <IntlMessages id="knowledge.installation" />
      </Box>
      <AppGridContainer>
        {installationQueries.map((data) => (
          <KBItem data={data} key={data.id} />
        ))}
      </AppGridContainer>
    </Box>
  );
};

export default Installation;

Installation.propTypes = {
  installationQueries: PropTypes.array.isRequired,
};
