import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {makeStyles} from '@mui/styles';
import {useDemoData} from '@mui/x-data-grid-generator';
import {DataGrid} from '@mui/x-data-grid';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const useStyles = makeStyles({
  root: {
    padding: 10,
    display: 'flex',
  },
  connected: {
    marginRight: 2,
    color: '#4caf50',
  },
  disconnected: {
    marginRight: 2,
    color: '#d9182e',
  },
});

function CustomFooterStatusComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FiberManualRecordIcon
        fontSize='small'
        className={classes[props.status]}
      />
      Status {props.status}
    </div>
  );
}

CustomFooterStatusComponent.propTypes = {
  status: PropTypes.oneOf(['connected', 'disconnected']).isRequired,
};

export {CustomFooterStatusComponent};

export default function CustomFooter() {
  const [status, setStatus] = React.useState('connected');
  const {data} = useDemoData({
    dataSet: 'Employee',
    rowLength: 4,
    maxColumns: 6,
  });

  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <div style={{height: 350, width: '100%', marginBottom: 16}}>
        <DataGrid
          {...data}
          components={{
            Footer: CustomFooterStatusComponent,
          }}
          componentsProps={{
            footer: {status},
          }}
        />
      </div>
      <Button
        color='primary'
        variant='contained'
        onClick={() =>
          setStatus((current) =>
            current === 'connected' ? 'disconnected' : 'connected',
          )
        }
      >
        {status === 'connected' ? 'Disconnect' : 'Connect'}
      </Button>
    </div>
  );
}
