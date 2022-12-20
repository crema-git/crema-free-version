import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppGridContainer from '@crema/components/AppGridContainer';

import SimpleContainer from './SimpleContainer';
import SimpleContainerSource from '!raw-loader!./SimpleContainer';

import FixedContainer from './FixedContainer';
import FixedContainerSource from '!raw-loader!./FixedContainer';

const Container = () => {
  return (
    <>
      <AppComponentHeader
        title="Container"
        description="The container centers your content horizontally. Its the most basic layout element."
        refUrl="https://mui.com/components/container/"
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="SimpleContainer"
            component={SimpleContainer}
            source={SimpleContainerSource}
            description="All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title="FixedContainer"
            component={FixedContainer}
            source={FixedContainerSource}
            description="All system properties are available via the sx prop. In addition, the sx prop allows you to specify any other CSS rules you may need. Heres an example of how you can use it:"
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Container;
