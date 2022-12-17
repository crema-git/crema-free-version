import React from 'react';
import AppInfoView from '@crema/components/AppInfoView';
import Box from '@mui/material/Box';
import AppList from '@crema/components/AppList';
import {useGetDataApi} from '@crema/utility/APIHooks';
import ListItem from "@crema/modules/userList/Standard";

const Standard = () => {
  const [{apiData: usersList}] = useGetDataApi('/api/user/list', []);

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

export default Standard;
