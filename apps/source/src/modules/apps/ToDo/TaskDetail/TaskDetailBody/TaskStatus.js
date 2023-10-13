import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@crema/helpers/IntlMessages';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import PropTypes from 'prop-types';
import { MenuItem } from '@mui/material';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { useTodoContext } from '../../../context/TodoContextProvider';

const TaskStatus = ({ selectedTask, onUpdateSelectedTask }) => {
  const { statusList } = useTodoContext();
  const infoViewActionsContext = useInfoViewActionsContext();

  const onChangeStatus = (event) => {
    const task = selectedTask;
    task.status = event.target.value;
    putDataApi('/api/todo/task/', infoViewActionsContext, {
      task: selectedTask,
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
    <FormControl variant='outlined'>
      <InputLabel id='status-select-outlined-label'>
        <IntlMessages id='common.status' />
      </InputLabel>
      <Select
        labelId='status-select-outlined-label'
        label={<IntlMessages id='common.status' />}
        value={selectedTask.status}
        onChange={(event) => onChangeStatus(event)}
        sx={{
          cursor: 'pointer',
          '& .MuiOutlinedInput-input': {
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.type}
              value={status.id}
              sx={{
                padding: 2,
                cursor: 'pointer',
              }}
            >
              {status.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
