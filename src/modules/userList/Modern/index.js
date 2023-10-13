import React from 'react';
import AppList from '@crema/components/AppList';
import {ListItem} from '@crema/modules/userList/Modern';
import AppLoader from '@crema/components/AppLoader';
import {useGetDataApi} from '@crema/hooks/APIHooks';

const Modern = () => {
  const [{apiData: usersList, loading}] = useGetDataApi('/api/user/list', []);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Modern;
