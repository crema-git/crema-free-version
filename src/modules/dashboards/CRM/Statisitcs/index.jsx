import React from 'react';
import GraphTabs from './GraphTabs';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';

export const Statistics = ({ clientsData = [], incomeData = [], projectData = [] }) => {
  return (
    <AppCard sxStyle={{ height: 1 }}>
      <GraphTabs clientsData={clientsData} incomeData={incomeData} projectData={projectData} />
    </AppCard>
  );
};

export default Statistics;

Statistics.propTypes = {
  clientsData: PropTypes.array,
  incomeData: PropTypes.array,
  projectData: PropTypes.array,
};
