import React from 'react';
import {store} from 'react-notifications-component';
import Button from '@mui/material/Button';

import notification from '../helpers/notification';
import {getMessage, getTitle, getType} from '../helpers/randomize';
import Box from '@mui/material/Box';

const InsertExample = () => {
  const add = (insert) => {
    const type = getType();
    return store.addNotification(
      Object.assign({}, notification, {
        type,
        insert,
        message: getMessage(type),
        title: getTitle(type),
      }),
    );
  };

  return (
    <Box>
      <Button
        sx={{
          marginBottom: 1,
          marginTop: 1,
          marginLeft: 2,
          marginRight: 2,
        }}
        color='primary'
        variant='contained'
        onClick={() => add('top')}
      >
        Top
      </Button>
      <Button
        sx={{
          marginBottom: 1,
          marginTop: 1,
          marginLeft: 2,
          marginRight: 2,
        }}
        color='primary'
        variant='contained'
        onClick={() => add('bottom')}
      >
        Bottom
      </Button>
    </Box>
  );
};
export default InsertExample;
