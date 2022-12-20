import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { BsArrowRightShort } from 'react-icons/bs';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const ContactUs = ({ contactList }) => {
  return (
    <Box>
      <Box>
        <Box>
          <img src="/assets/images/extra-pages/price-global.svg" />
        </Box>
        <Box>
          <Typography component="h3">Contact us!</Typography>
          <Button>
            Get Started <BsArrowRightShort />
          </Button>
        </Box>
      </Box>
      <List
        sx={{
          py: 0,
        }}
      >
        {contactList.map((data, index) => (
          <ListItem
            key={index}
            button
            sx={{
              px: 0,
              py: 0,
              mb: 2,
            }}
          >
            <ListItemText primary={data.title} />
          </ListItem>
        ))}
      </List>
      <Box>
        <FormControlLabel
          value="Monthly Pricing"
          control={<Switch color="primary" />}
          label="Monthly Pricing"
          labelPlacement="start"
        />
        <Box component="span">Yearly Pricing</Box>
        <Box component="span">/ save 17%</Box>
      </Box>
    </Box>
  );
};

export default ContactUs;

ContactUs.propTypes = {
  contactList: PropTypes.array,
};
