import React from 'react';
import {
  Bar,
  BarChart,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';
import {Fonts} from '@crema/constants/AppEnums';
import Box from '@mui/material/Box';

const SocialVisitorsGraph = ({data}) => {
  const customizedLabel = (x, y, value) => {
    return (
      <text
        x={x + 15}
        y={y}
        dy={-20}
        fill={value > 0 ? '#48BB78' : '#E53E3E'}
        className='graphText'
        textAnchor='middle'
      >
        {value > 0 ? '+' + value : value}%
      </text>
    );
  };
  return (
    <Box
      sx={{
        position: 'relative',
        '& .graphText': {
          fontWeight: Fonts.MEDIUM,
          fontSize: {xs: 16, xl: 18},
        },
      }}
    >
      <ResponsiveContainer width='100%' height={300}>
        <BarChart
          barSize={8}
          data={data}
          margin={{top: 30, right: 0, left: 0, bottom: 20}}
        >
          <XAxis dataKey='visitors' axisLine={false} tickLine={false} hide />
          <YAxis hide />
          <Bar dataKey='visitors'>
            <LabelList
              dataKey='change'
              content={(x, y, value) => customizedLabel(x, y, value)}
            />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default SocialVisitorsGraph;

SocialVisitorsGraph.defaultProps = {
  data: [],
};

SocialVisitorsGraph.propTypes = {
  data: PropTypes.array,
};
