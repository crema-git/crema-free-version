import React from 'react';
import AppInfoView from '@crema/components/AppInfoView';
import AppList from '@crema/components/AppList';
import { useGetDataApi } from '@crema/utility/APIHooks';
import { ListItem } from '@crema/modules/userList/Flat';
import AppLoader from '@crema/components/AppLoader';

const Flat = () => {
  const [{ apiData: usersList, loading }] = useGetDataApi('/api/user/list', []);

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
      <AppInfoView />
    </>
  );
};

export default Flat;
