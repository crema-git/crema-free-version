import React from 'react';
import {Line, LineChart} from 'recharts';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const LineGraph = (props) => {
  const {data, graphColor} = props;

  return (
    <Box
      sx={{
        ml: 'auto',
        '& .lineChart': {
          mb: 2,
        },
      }}
    >
      <LineChart className='lineChart' width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={5}
          dot={false}
        />
      </LineChart>

      <LineChart width={300} height={40} data={data}>
        <Line
          type='monotone'
          dataKey='value'
          stroke={graphColor}
          strokeWidth={5}
          dot={false}
          strokeDasharray='5 5'
        />
      </LineChart>
    </Box>
  );
};

export default LineGraph;

LineGraph.defaultProps = {
  data: [],
  graphColor: '',
};

LineGraph.propTypes = {
  data: PropTypes.array,
  graphColor: PropTypes.string,
};
