import TinyBarChart from './Components/TinyBarChart';
import TinyBarChartSource from './Components/TinyBarChart?raw';
import StackedBarChart from './Components/StackedBarChart';
import StackedBarChartSource from './Components/StackedBarChart?raw';
import MixBarChart from './Components/MixBarChart';
import MixBarChartSource from './Components/MixBarChart?raw';
import CustomShapeBarChart from './Components/CustomShapeBarChart';
import CustomShapeBarChartSource from './Components/CustomShapeBarChart?raw';
import PositiveAndNegativeBarChart from './Components/PositiveAndNegativeBarChart';
import PositiveAndNegativeBarChartSource from './Components/PositiveAndNegativeBarChart?raw';
import BarChartStackedBySign from './Components/BarChartStackedBySign';
import BarChartStackedBySignSource from './Components/BarChartStackedBySign?raw';
import BiaxialBarChart from './Components/BiaxialBarChart';
import BiaxialBarChartSource from './Components/BiaxialBarChart?raw';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';

const BarChart = () => {
  return (
    <>
      <AppComponentHeader
        title='Bar Chart'
        description='All svg elements can be added into the BarChart component, such as defs, linearGradient, etc.'
        refUrl='http://recharts.org/en-US/api/BarChart/'
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Tiny Bar Chart'
            component={TinyBarChart}
            source={TinyBarChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Stacked Bar Chart'
            component={StackedBarChart}
            source={StackedBarChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Mix Bar Chart'
            component={MixBarChart}
            source={MixBarChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Custom Shape Bar Chart'
            component={CustomShapeBarChart}
            source={CustomShapeBarChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Positive And Negative Bar Chart'
            component={PositiveAndNegativeBarChart}
            source={PositiveAndNegativeBarChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Bar Chart Stacked By Sign'
            component={BarChartStackedBySign}
            source={BarChartStackedBySignSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Biaxial Bar Chart'
            component={BiaxialBarChart}
            source={BiaxialBarChartSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default BarChart;
