import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@crema/helpers/IntlMessages';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import PropTypes from 'prop-types';
import { MenuItem } from '@mui/material';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useTodoContext } from '../../../context/TodoContextProvider';

const TaskPriority = ({ selectedTask, onUpdateSelectedTask }) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { priorityList } = useTodoContext();

  const [priority, setPriority] = useState(selectedTask.priority.type);

  const onChangePriority = (event) => {
    setPriority(event.target.value);
    const priority = priorityList.find(
      (data) => data.type.toString() === event.target.value.toString(),
    );
    console.log('priority: ', priority, event.target.value);
    const task = selectedTask;
    task.priority = priority;
    putDataApi('/api/todoApp/task/', infoViewActionsContext, {
      task: selectedTask,
    })
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        infoViewActionsContext.showMessage('Task Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel id='priority-select-outlined-label'>
        <IntlMessages id='common.priority' />
      </InputLabel>
      <Select
        labelId='priority-select-outlined-label'
        label={<IntlMessages id='common.priority' />}
        name='priority'
        value={priority}
        onChange={(event) => onChangePriority(event)}
        sx={{
          cursor: 'pointer',
          '& .MuiOutlinedInput-input': {
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {priorityList.map((priority) => {
          return (
            <MenuItem
              key={priority.id}
              value={priority.type}
              sx={{
                padding: 2,
                cursor: 'pointer',
              }}
            >
              {priority.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskPriority;

TaskPriority.propTypes = {
  selectedTask: PropTypes.object.isRequired,
  onUpdateSelectedTask: PropTypes.func,
};
