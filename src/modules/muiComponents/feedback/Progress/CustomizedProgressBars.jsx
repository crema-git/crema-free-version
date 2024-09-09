import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#308fe8',

    ...theme.applyStyles("light", {
      backgroundColor: '#1a90ff'
    })
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    (<Box sx={{ position: 'relative' }}>
      <CircularProgress
        variant='determinate'
        sx={theme => ({
          color: theme.palette.grey[800],

          ...theme.applyStyles("light", {
            color: theme.palette.grey[200]
          })
        })}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={theme => ({
          color: '#308fe8',
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,

          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },

          ...theme.applyStyles("light", {
            color: '#1a90ff'
          })
        })}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>)
  );
}

export default function CustomizedProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
      <br />
      <BorderLinearProgress variant='determinate' value={50} />
    </Box>
  );
}
