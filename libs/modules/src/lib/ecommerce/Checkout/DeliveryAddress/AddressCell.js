import React from 'react';
import { Box, Button } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Fonts } from '@crema/constants/AppEnums';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';

const AddressCell = ({ address, selectedAddress, setSelectAddress }) => {
  const isActive = selectedAddress.id === address.id;
  return (
    <Box
      onClick={() => setSelectAddress(address)}
      className="item-hover"
      sx={{
        border: 1,
        px: 5,
        py: 2,
        mb: 4,
        borderRadius: 4,
        borderColor: '#D9DBE3',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontSize: 14,
          fontWeight: Fonts.MEDIUM,
        }}
      >
        <Checkbox
          checked={isActive}
          icon={<RadioButtonUncheckedIcon />}
          checkedIcon={<RadioButtonCheckedIcon />}
          color="primary"
        />
        <Box sx={{ mx: 3.5 }}>{address.name}</Box>
        <Box>{address.mobile}</Box>
        {isActive ? (
          <Box sx={{ ml: 'auto' }}>
            <IconButton size="small">
              <EditOutlinedIcon />
            </IconButton>
          </Box>
        ) : null}
      </Box>
      <Box
        sx={{ fontSize: 14, fontWeight: Fonts.REGULAR, ml: 14, mt: -2, mb: 4 }}
      >
        {address.addressLine}, {address.city}, {address.pin}
      </Box>
      {isActive ? (
        <Box
          sx={{ fontSize: 14, fontWeight: Fonts.REGULAR, ml: 14, mt: 1, mb: 4 }}
        >
          <Button variant="contained" color="primary">
            Deliver Here
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default AddressCell;

AddressCell.propTypes = {
  address: PropTypes.object,
  selectedAddress: PropTypes.object,
  setSelectAddress: PropTypes.func,
};
