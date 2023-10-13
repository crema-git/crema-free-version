import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import CustomLocaleTextGrid from './CustomLocaleTextGrid';
import CustomLocaleTextGridSource from '!raw-loader!./CustomLocaleTextGrid';

const Localization = () => {
  return (
    <>
      <AppComponentHeader
        title='Localization'
        description='The Data Grid allows to support users from different locales, with formatting, RTL, and localized strings.'
        refUrl='https://mui.com/components/data-grid/localization/'
      />

      <AppGridContainer>
        <Grid item xs={12}>
          <AppComponentCard
            title='Custom Locale Text Grid'
            component={CustomLocaleTextGrid}
            source={CustomLocaleTextGridSource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Localization;
