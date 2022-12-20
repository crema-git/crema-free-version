import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppList from '@crema/components/AppList';
import { ListItem } from '@crema/modules/userList/Flat';
import AppLoader from '@crema/components/AppLoader';
import { onGetUserList } from '@crema/redux/actions';

const Flat = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(({ userList }) => userList.usersList);

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  return (
    <>
      {usersList ? (
        <AppList
          onEndReached={() => console.log('onEndReached')}
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default Flat;
