import React from 'react';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppsStarredIcon from '@crema/components/AppsStarredIcon';
import StatusToggleButton from './StatusToggleButton';
import AppsDeleteIcon from '@crema/components/AppsDeleteIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppTooltip from '@crema/components/AppTooltip';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { putDataApi } from '@crema/hooks/APIHooks';

const TaskDetailHeader = (props) => {
  const { selectedTask, onUpdateSelectedTask } = props;
  const infoViewActionsContext = useInfoViewActionsContext();

  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onChangeStarred = (checked) => {
    putDataApi('/api/todo/update/starred', infoViewActionsContext, {
      taskIds: [selectedTask.id],
      status: checked,
    })
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        infoViewActionsContext.showMessage(
          data[0].isStarred
            ? 'Task Marked as Starred Successfully'
            : 'Task Marked as Unstarred Successfully',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDeleteTask = () => {
    const task = selectedTask;
    task.folderValue = 126;
    putDataApi('/api/todoApp/task/', infoViewActionsContext, {
      task,
    })
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        navigate(-1);
        infoViewActionsContext.showMessage('Task Deleted Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <>
      <Box
        sx={{
          cursor: 'pointer',
        }}
        component='span'
        mr={{ xs: 2, sm: 4 }}
        onClick={onClickBackButton}
      >
        <AppTooltip title={<IntlMessages id='common.back' />}>
          <ArrowBackIcon
            sx={{
              color: 'text.secondary',
            }}
          />
        </AppTooltip>
      </Box>

      <StatusToggleButton
        selectedTask={selectedTask}
        onUpdateSelectedTask={onUpdateSelectedTask}
      />

      <Box
        component='span'
        sx={{
          marginLeft: 'auto',
          display: { xs: 'none', sm: 'block' },
        }}
        onChange={onChangeStarred}
      >
        <AppsStarredIcon item={selectedTask} />
      </Box>

      <AppsDeleteIcon
        deleteAction={onDeleteTask}
        deleteTitle={<IntlMessages id='todo.deleteMessage' />}
        sx={{
          color: 'text.disabled',
        }}
      />
    </>
  );
};

export default TaskDetailHeader;

TaskDetailHeader.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
