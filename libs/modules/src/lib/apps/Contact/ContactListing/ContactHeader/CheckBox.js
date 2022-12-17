import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const CheckBox = ({checkedContacts, contactList, setCheckedContacts}) => {
  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const contactIds = contactList.map((contact) => contact.id);
      setCheckedContacts(contactIds);
    } else {
      setCheckedContacts([]);
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Checkbox
        sx={{
          color: (theme) => theme.palette.text.disabled,
        }}
        color='primary'
        indeterminate={
          checkedContacts.length > 0 &&
          checkedContacts.length < contactList.length
        }
        checked={
          contactList.length > 0 &&
          checkedContacts.length === contactList.length
        }
        onChange={onHandleMasterCheckbox}
      />
    </Box>
  );
};

export default CheckBox;

CheckBox.propTypes = {
  contactList: PropTypes.array,
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
};
