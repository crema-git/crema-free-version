import React from 'react';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppCard from '@crema/components/AppCard';
import GainerLooserTable from './GainerLooserTable';

const GainerLooser = ({data}) => {
  const {messages} = useIntl();
  return (
    <AppCard
      contentStyle={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
      title={messages['dashboard.crypto.topGainersTopLosers']}
    >
      <GainerLooserTable data={data} />
    </AppCard>
  );
};

export default GainerLooser;
GainerLooser.propTypes = {
  data: PropTypes.array,
};
