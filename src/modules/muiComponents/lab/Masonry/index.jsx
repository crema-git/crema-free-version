import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';

import BasicMasonry from './BasicMasonry';
import BasicMasonrySource from './BasicMasonry?raw';

import ImageMasonry from './ImageMasonry';
import ImageMasonrySource from './ImageMasonry?raw';

import FixedColumns from './FixedColumns';
import FixedColumnsSource from './FixedColumns?raw';

import ResponsiveColumns from './ResponsiveColumns';
import ResponsiveColumnsSource from './ResponsiveColumns?raw';

import FixedSpacing from './FixedSpacing';
import FixedSpacingSource from './FixedSpacing?raw';

import ResponsiveSpacing from './ResponsiveSpacing';
import ResponsiveSpacingSource from './ResponsiveSpacing?raw';

import SSRMasonry from './SSRMasonry';
import SSRMasonrySource from './SSRMasonry?raw';

const Masonry = () => {
  return (
    <>
      <AppComponentHeader
        title='Masonry'
        description='Masonry lays out contents of different sizes as blocks of the same width and variable height with configurable gaps.'
        refUrl='https://mui.com/components/masonry/'
      />

      <AppGridContainer>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FixedColumns'
            component={FixedColumns}
             source={FixedColumnsSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveColumns'
            component={ResponsiveColumns}
             source={ResponsiveColumnsSource}
            noScrollbar
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='FixedSpacing'
            component={FixedSpacing}
             source={FixedSpacingSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ResponsiveSpacing'
            component={ResponsiveSpacing}
             source={ResponsiveSpacingSource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='BasicMasonry'
            component={BasicMasonry}
             source={BasicMasonrySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='SSRMasonry'
            component={SSRMasonry}
             source={SSRMasonrySource}
            noScrollbar
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <AppComponentCard
            title='ImageMasonry'
            component={ImageMasonry}
             source={ImageMasonrySource}
            noScrollbar
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default Masonry;
