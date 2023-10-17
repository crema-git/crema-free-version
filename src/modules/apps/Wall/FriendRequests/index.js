import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import RequestItem from './RequestItem';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const FriendRequests = ({friendRequests}) => {
  const {messages} = useIntl();

  return (
    <AppCard
      sxStyle={{mb: 8}}
      title={messages['wall.friends']}
      action={messages['common.viewAll']}
      contentStyle={{px: 0, pt: 2}}
    >
      <AppList
        animation='transition.slideRightBigIn'
        data={friendRequests}
        renderRow={(data, index) => <RequestItem key={index} request={data} />}
      />
    </AppCard>
  );
};

export default FriendRequests;

FriendRequests.propTypes = {
  friendRequests: PropTypes.array.isRequired,
};
