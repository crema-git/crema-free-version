import React from 'react';
import {BarChart, Bar, XAxis, ResponsiveContainer, Tooltip} from 'recharts';
import PropTypes from 'prop-types';

const MixBarChart = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={270}>
      <BarChart
        barSize={7}
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <XAxis dataKey='name' dy={10} />
        <Tooltip />
        <Bar dataKey='AS' stackId='a' fill='#49BD65' />
        <Bar dataKey='Rev' stackId='a' fill='#0A8FDC' />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MixBarChart;

MixBarChart.defaultProps = {
  data: [],
};

MixBarChart.propTypes = {
  data: PropTypes.array,
};
