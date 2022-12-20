import React from 'react';
import AppList from '@crema/components/AppList';
import AppCard from '@crema/components/AppCard';
import FollowItem from './FollowItem';
import { useIntl } from 'react-intl';
import PropTypes from 'prop-types';

const WhoToFollow = ({ whoToFollow }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages['wall.whoToFollow']}
      contentStyle={{ px: 0 }}
      action={messages['common.viewAll']}
    >
      <AppList
        data={whoToFollow}
        renderRow={(item, index) => <FollowItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default WhoToFollow;

WhoToFollow.propTypes = {
  whoToFollow: PropTypes.array,
};
