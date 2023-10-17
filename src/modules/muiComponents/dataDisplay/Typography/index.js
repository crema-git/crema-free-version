import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import Types from './Types';
import TypesSource from '!raw-loader!./Types';

import TypographyTheme from './TypographyTheme';
import TypographyThemeSource from '!raw-loader!./TypographyTheme';

const Typography = () => {
  return (
    <>
      <AppComponentHeader
        title='Typography'
        description='Use typography to present your design and content as clearly and efficiently as possible.'
        refUrl='https://mui.com/components/Typographys/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='Types'
            component={Types}
            source={TypesSource}
            noScrollbar
            description='The Typography component makes it easy to apply a default set of font weights and sizes in your application.'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='TypographyTheme'
            component={TypographyTheme}
            source={TypographyThemeSource}
            noScrollbar
            description='In some situations you might not be able to use the Typography component. Hopefully, you might be able to take advantage of the typography keys of the theme.'
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Typography;
