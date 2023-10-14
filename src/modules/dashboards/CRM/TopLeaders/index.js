import React from 'react';
import AppCard from '@crema/components/AppCard';
import TopLeadersTable from './TopLeadersTable';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';

const TopLeaders = ({topLeaders}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      title={messages['dashboard.crm.topLeaders']}
      action={messages['common.viewAll']}
    >
      <TopLeadersTable topLeaders={topLeaders} />
    </AppCard>
  );
};

export default TopLeaders;
TopLeaders.propTypes = {
  topLeaders: PropTypes.array,
};
