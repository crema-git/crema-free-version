import React from 'react';
import AppPage from '../../@crema/hoc/AppPage';
import asyncComponent from '../../@crema/utility/asyncComponent';
import AppPageMeta from '../../@crema/core/AppPageMeta';

const HealthCare = asyncComponent(() =>
  import('../../modules/dashboards/HealthCare'),
);

export default AppPage((props) => {
  return (
    <React.Fragment>
      <AppPageMeta title='Health Care | Crema ' />
      <HealthCare />
    </React.Fragment>
  );
});
