import React from 'react';
import AppPage from '@crema/hoc/AppPage';
import asyncComponent  from "@crema/components/AppAsyncComponent"

const AboutUs = asyncComponent(() =>
  import('../../../modules/extraPages/AboutUs'),
);
export default AppPage(() => <AboutUs />);
