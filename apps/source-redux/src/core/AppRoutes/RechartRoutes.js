import React from 'react';
import AreaChart from '../../modules/thirdParty/recharts/Area';
import BarChart from '../../modules/thirdParty/recharts/Bar';
import ComposedChart from '../../modules/thirdParty/recharts/Composed';
import LineChart from '../../modules/thirdParty/recharts/Line';
import PieChart from '../../modules/thirdParty/recharts/Pie';
import Radial from '../../modules/thirdParty/recharts/Radial';
import Treemap from '../../modules/thirdParty/recharts/Treemap';
import Scatter from '../../modules/thirdParty/recharts/Scatter';
import Radar from '../../modules/thirdParty/recharts/Radar';
import FunnelChart from '../../modules/thirdParty/recharts/Funnel';

export const rechartsConfigs = [
  {
    path: '/recharts/area',
    element: <AreaChart />,
  },
  {
    path: '/recharts/bar',
    element: <BarChart />,
  },
  {
    path: '/recharts/composed',
    element: <ComposedChart />,
  },
  {
    path: '/recharts/line',
    element: <LineChart />,
  },
  {
    path: '/recharts/pie',
    element: <PieChart />,
  },
  {
    path: '/recharts/radar',
    element: <Radar />,
  },
  {
    path: '/recharts/radial',
    element: <Radial />,
  },
  {
    path: '/recharts/treemap',
    element: <Treemap />,
  },
  {
    path: '/recharts/scatter',
    element: <Scatter />,
  },
  {
    path: '/recharts/funnel',
    element: <FunnelChart />,
  },
];
