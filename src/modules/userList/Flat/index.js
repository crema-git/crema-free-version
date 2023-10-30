import React from 'react';
import AppList from '@crema/components/AppList';
import AppLoader from '@crema/components/AppLoader';
import {useGetDataApi} from '@crema/hooks/APIHooks';
import ListItem from './ListItem/index';

const Flat = () => {
  const [{apiData: usersList, loading}] = useGetDataApi('/api/user/list', []);
  return (
    <>
      {loading ? (
        <AppLoader />
      ) : (
        <AppList
          onEndReached={() => console.log('onEndReached')}
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      )}
    </>
  );
};

export default Flat;
