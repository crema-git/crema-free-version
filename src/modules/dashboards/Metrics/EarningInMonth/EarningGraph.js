import React from 'react';
import {Cell, Pie, PieChart} from 'recharts';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';

// const RADIAN = Math.PI / 180;

// const renderCustomizedLabel = ({
//   cx,
//   cy,
//   midAngle,
//   innerRadius,
//   outerRadius,
//   percent,
// }) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text
//       x={x}
//       y={y}
//       fill='white'
//       textAnchor={x > cx ? 'start' : 'end'}
//       dominantBaseline='central'
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

const EarningGraph = ({data}) => {
  return (
    <PieChart width={400} height={400}>
      <text
        x='50%'
        fontWeight={Fonts.MEDIUM}
        fill='#0A8FDC'
        fontSize={20}
        y='55%'
        textAnchor='middle'
        dominantBaseline='middle'
      >
        GBP
      </text>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        // label={renderCustomizedLabel}
        outerRadius='95%'
        fill='#8884d8'
        dataKey='value'
        innerRadius='80%'
        paddingAngle={5}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default EarningGraph;

EarningGraph.defaultProps = {
  data: [],
};

EarningGraph.propTypes = {
  data: PropTypes.array,
};
