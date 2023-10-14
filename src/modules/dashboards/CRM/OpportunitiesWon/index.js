import React from 'react';
import OpportunitiesWonGraph from './OpportunitiesWonGraph';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import AppSelect from '@crema/components/AppSelect';

const OpportunitiesWon = ({data}) => {
  const {messages} = useIntl();
  const handleSelectionType = (data) => {
    console.log('data: ', data);
  };
  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['dashboard.crm.opportunitiesWon']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
    >
      <OpportunitiesWonGraph data={data} />
    </AppCard>
  );
};

export default OpportunitiesWon;

OpportunitiesWon.defaultProps = {
  data: [],
};

OpportunitiesWon.propTypes = {
  data: PropTypes.array,
};
