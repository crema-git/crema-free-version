import React, { useEffect } from 'react';
import AppInfoView from '@crema/components/AppInfoView';
import Box from '@mui/material/Box';
import AppList from '@crema/components/AppList';
import { ListItem } from '@crema/modules/userList/Modern';
import { useDispatch, useSelector } from 'react-redux';
import { onGetUserList } from '../../../toolkit/actions';

const Modern = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(({ userList }) => userList.usersList);

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  return (
    <Box flex={1}>
      {usersList ? (
        <AppList
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : null}
      <AppInfoView />
    </Box>
  );
};

export default Modern;
