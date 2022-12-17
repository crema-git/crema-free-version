import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';
import {useDemoData} from '@mui/x-data-grid-generator';
import {createTheme, darken, lighten} from '@mui/material/styles';
import {makeStyles} from '@mui/styles';

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) => {
    const getBackgroundColor = (color) =>
      theme.palette.mode === 'dark' ? darken(color, 0.6) : lighten(color, 0.6);

    const getHoverBackgroundColor = (color) =>
      theme.palette.mode === 'dark' ? darken(color, 0.5) : lighten(color, 0.5);

    return {
      root: {
        '& .super-app-theme--Open': {
          backgroundColor: getBackgroundColor(theme.palette.info.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(theme.palette.info.main),
          },
        },
        '& .super-app-theme--Filled': {
          backgroundColor: getBackgroundColor(theme.palette.success.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(
              theme.palette.success.main,
            ),
          },
        },
        '& .super-app-theme--PartiallyFilled': {
          backgroundColor: getBackgroundColor(theme.palette.warning.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(
              theme.palette.warning.main,
            ),
          },
        },
        '& .super-app-theme--Rejected': {
          backgroundColor: getBackgroundColor(theme.palette.error.main),
          '&:hover': {
            backgroundColor: getHoverBackgroundColor(theme.palette.error.main),
          },
        },
      },
    };
  },
  {defaultTheme},
);

export default function StylingRowsGrid() {
  const classes = useStyles();

  const {data} = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
  });

  return (
    <div style={{height: 400, width: '100%'}} className={classes.root}>
      <DataGrid
        {...data}
        getRowClassName={(params) =>
          `super-app-theme--${params.getValue(params.id, 'status')}`
        }
      />
    </div>
  );
}
