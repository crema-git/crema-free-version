
import SimpleLineChart from './Components/SimpleLineChart';
import SimpleLineChartSource from './Components/SimpleLineChart?raw';
import VerticalLineChart from './Components/VerticalLineChart';
import VerticalLineChartSource from './Components/VerticalLineChart?raw';
import CustomizedDotLineChart from './Components/CustomizedDotLineChart';
import CustomizedDotLineChartSource from './Components/CustomizedDotLineChart?raw';
import LineChartWithReferenceLines from './Components/LineChartWithReferenceLines';
import LineChartWithReferenceLinesSource from './Components/LineChartWithReferenceLines?raw';
import DashedLineChart from './Components/DashedLineChart';
import DashedLineChartSource from './Components/DashedLineChart?raw';
import LineChartWithXAxisPading from './Components/LineChartWithXAxisPading';
import LineChartWithXAxisPadingSource from './Components/LineChartWithXAxisPading?raw';
import LineChartConnectNulls from './Components/LineChartConnectNulls';
import LineChartConnectNullsSource from './Components/LineChartConnectNulls?raw';
import SynchronizedLineChart from './Components/SynchronizedLineChart';
import SynchronizedLineChartSource from './Components/SynchronizedLineChart?raw';
import Grid from '@mui/material/Grid';
import AppComponentCard from '@crema/components/AppComponentCard';
import AppComponentHeader from '@crema/components/AppComponentHeader';
import AppGridContainer from '@crema/components/AppGridContainer';

const LineChart = () => {
  return (
    <>
      <AppComponentHeader
        title='Line Chart'
        description='All svg elements can be added into the LineChart component, such as defs.'
        refUrl='http://recharts.org/en-US/api/LineChart'
      />

      <AppGridContainer>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Simple Line Chart'
            component={SimpleLineChart}
            source={SimpleLineChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Vertical Line Chart'
            component={VerticalLineChart}
            source={VerticalLineChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Customized Dot Line Chart'
            component={CustomizedDotLineChart}
            source={CustomizedDotLineChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Line Chart With Reference Lines'
            component={LineChartWithReferenceLines}
            source={LineChartWithReferenceLinesSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Dashed Line Chart'
            component={DashedLineChart}
            source={DashedLineChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Line Chart With X-Axis Padding'
            component={LineChartWithXAxisPading}
            source={LineChartWithXAxisPadingSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Synchronized Line Chart'
            component={SynchronizedLineChart}
            source={SynchronizedLineChartSource}
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <AppComponentCard
            title='Line Chart Connect Nulls'
            component={LineChartConnectNulls}
            source={LineChartConnectNullsSource}
          />
        </Grid>
      </AppGridContainer>
    </>
  );
};

export default LineChart;
