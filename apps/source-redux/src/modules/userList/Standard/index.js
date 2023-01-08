import React, { useEffect } from 'react';
import AppInfoView from '@crema/components/AppInfoView';
import AppList from '@crema/components/AppList';
import { ListItem } from '@crema/modules/userList/Standard';
import AppLoader from '@crema/components/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import { onGetUserList } from '../../../redux/actions';

const Standard = () => {
  const dispatch = useDispatch();

  const usersList = useSelector(({ userList }) => userList.usersList);

  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  return (
    <>
      {usersList ? (
        <AppList
          data={usersList}
          renderRow={(user) => {
            return <ListItem user={user} key={user.id} />;
          }}
        />
      ) : (
        <AppLoader />
      )}
      <AppInfoView />
    </>
  );
};

export default Standard;
