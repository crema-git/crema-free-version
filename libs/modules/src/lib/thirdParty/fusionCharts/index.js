import React from 'react';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';
import SimpleChart from './SimpleChart';
import SimpleChartSource from '!raw-loader!./SimpleChart';
import SimpleGuage from './SimpleGuage';
import SimpleGuageSource from '!raw-loader!./SimpleGuage';
import WorldMap from './WorldMap';
import WorldMapSource from '!raw-loader!./WorldMap';
import StackedColumns from './StackedColumns';
import StackedColumnsSource from '!raw-loader!./StackedColumns';
import StackedNegative from './StackedNegative';
import StackedNegativeSource from '!raw-loader!./StackedNegative';
import StackedArea from './StackedArea';
import StackedAreaSource from '!raw-loader!./StackedArea';

const FusionCharts = () => {
  return (
    <>
      <AppComponentHeader
        title="FusionCharts"
        description="Build beautiful web & mobile dashboards"
        refUrl="https://www.fusioncharts.com/react-charts?framework=react/"
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Stacked Columns"
            component={StackedColumns}
            source={StackedColumnsSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Stacked Negative"
            component={StackedNegative}
            source={StackedNegativeSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Stacked Area"
            component={StackedArea}
            source={StackedAreaSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Simple Chart"
            component={SimpleChart}
            source={SimpleChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="Simple Guage"
            component={SimpleGuage}
            source={SimpleGuageSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title="WorldMap"
            component={WorldMap}
            source={WorldMapSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default FusionCharts;
