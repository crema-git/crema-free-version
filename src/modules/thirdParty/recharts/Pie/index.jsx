import React from 'react';
import TwoLevelPieChart from './Components/TwoLevelPieChart';
import TwoLevelPieChartSource from './Components/TwoLevelPieChart?raw';
import StraightAnglePieChart from './Components/StraightAnglePieChart';
import StraightAnglePieChartSource from './Components/StraightAnglePieChart?raw';
import TwoSimplePieChart from './Components/TwoSimplePieChart';
import TwoSimplePieChartSource from './Components/TwoSimplePieChart?raw';
import CustomActiveShapePieChart from './Components/CustomActiveShapePieChart';
import CustomActiveShapePieChartSource from './Components/CustomActiveShapePieChart?raw';
import PieChartWithPaddingAngle from './Components/PieChartWithPaddingAngle';
import PieChartWithPaddingAngleSource from './Components/PieChartWithPaddingAngle?raw';
import Grid from '@mui/material/Grid';

import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';

const PieChart = () => {
  return (
    <>
      <AppComponentHeader
        title='Pie Chart'
        refUrl='http://recharts.org/en-US/api/PieChart/'
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Two Level Pie Chart'
            component={TwoLevelPieChart}
            source={TwoLevelPieChartSource}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Straight Angle Pie Chart'
            component={StraightAnglePieChart}
            source={StraightAnglePieChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Custom Active Shape Pie Chart'
            component={CustomActiveShapePieChart}
            source={CustomActiveShapePieChartSource}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Two Simple Pie Chart'
            component={TwoSimplePieChart}
            source={TwoSimplePieChartSource}
          />
        </Grid>

        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Pie Chart With Padding Angle'
            component={PieChartWithPaddingAngle}
            source={PieChartWithPaddingAngleSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default PieChart;
