import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import IntlMessages from '@crema/helpers/IntlMessages';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {putDataApi} from '@crema/hooks/APIHooks';

const StatusButton = styled(Button)(({theme}) => ({
  fontSize: 12,
  [theme.breakpoints.up('lg')]: {
    fontSize: 14,
  },
}));

const StyledDoneIcon = styled(DoneIcon)(({theme}) => ({
  marginRight: 4,
  fontSize: 18,
  verticalAlign: 'middle',
  [theme.breakpoints.up('sm')]: {
    marginRight: 8,
  },
}));

const StatusToggleButton = ({selectedTask, onUpdateSelectedTask}) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeTaskStatus = (status) => {
    const task = selectedTask;
    task.status = status;
    putDataApi('/api/calendar/task/', infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      {selectedTask.status === 1003 ? (
        <StatusButton
          variant='contained'
          color='primary'
          startIcon={<StyledDoneIcon />}
          onClick={() => onChangeTaskStatus(1001)}
        >
          <IntlMessages id='todo.completed' />
        </StatusButton>
      ) : (
        <StatusButton
          variant='outlined'
          color='primary'
          startIcon={<StyledDoneIcon />}
          onClick={() => onChangeTaskStatus(1003)}
        >
          <IntlMessages id='todo.markAsCompleted' />
        </StatusButton>
      )}
    </>
  );
};

export default StatusToggleButton;

StatusToggleButton.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
