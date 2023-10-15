import React from 'react';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SideBarItem = ({item, onGetFaqData, selectionId}) => {
  return (
    <ListItem
      button
      className={clsx('listItem', {
        active: item.id === selectionId,
      })}
      onClick={() => onGetFaqData(item.id)}
    >
      <Box sx={{mr: 3, color: 'text.primary'}}>
        <ListItemIcon
          sx={{
            minWidth: 10,
          }}
        >
          {item.icon}
        </ListItemIcon>
      </Box>
      <ListItemText primary={item.name} />
    </ListItem>
  );
};

export default SideBarItem;

SideBarItem.propTypes = {
  item: PropTypes.object.isRequired,
  onGetFaqData: PropTypes.func,
  selectionId: PropTypes.number,
};
