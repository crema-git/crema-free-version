import React from 'react';
import { Line, LineChart, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const WorkViewsGraph = ({ data }) => {
  return (
    <Box
      sx={{
        p: 0,
        mt: 'auto',
        flexDirection: 'auto',
        objectPosition: 'bottom',
      }}
    >
      <ResponsiveContainer height={100} width='100%'>
        <LineChart data={data}>
          <Line
            type='monotone'
            dataKey='value'
            stroke='#F04F47'
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WorkViewsGraph;

WorkViewsGraph.defaultProps = {
  data: [],
};

WorkViewsGraph.propTypes = {
  data: PropTypes.array,
};
