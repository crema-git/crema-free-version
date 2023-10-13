import {Box, Typography} from '@mui/material';
import React from 'react';
import PricingTable from './Table';
import PropTypes from 'prop-types';

const PackageTable = ({billingFormat, pricing}) => {
  return (
    <Box
      sx={{
        p: 6,
        borderRadius: (theme) => theme.cardRadius / 4,
        backgroundColor: (theme) => theme.palette.common.white,
        boxShadow:
          '0px 4.00784px 8.01569px -2.00392px rgba(16, 24, 40, 0.1), 0px 2.00392px 4.00784px -2.00392px rgba(16, 24, 40, 0.06)',
      }}
    >
      <Typography
        variant='h3'
        sx={{mt: 8, width: '100%', fontSize: 48, textAlign: 'center'}}
      >
        Compare Our Plans
      </Typography>
      <Box sx={{mt: 4}}>
        <PricingTable billingFormat={billingFormat} tableData={pricing} />
      </Box>
    </Box>
  );
};

export default PackageTable;

PackageTable.propTypes = {
  billingFormat: PropTypes.string,
  pricing: PropTypes.array,
};
