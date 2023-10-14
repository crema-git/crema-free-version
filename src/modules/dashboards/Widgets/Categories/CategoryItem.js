import React from 'react';
import ListItemIcon from '@mui/material/ListItemIcon';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';

const CategoryItem = (props) => {
  const {item, handleChange} = props;
  return (
    <ListItem key={item.id} className='item-hover'>
      <ListItemIcon>
        <Box
          sx={{
            ml: -2,
          }}
        >
          <Checkbox
            color='primary'
            checked={item.isChecked}
            onChange={(e) => handleChange(e, item)}
          />
        </Box>
      </ListItemIcon>
      <ListItemText
        primary={
          <Box
            component='span'
            sx={{
              color: !item.isChecked ? 'text.secondary' : '',
              fontSize: 14,
            }}
          >
            {item.name}
          </Box>
        }
      />
    </ListItem>
  );
};

export default CategoryItem;

CategoryItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};
