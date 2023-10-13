import React from 'react';
import { useDispatch } from 'react-redux';
import { onUpdateSelectedCalTask } from '../../../../../toolkit/actions';
import { useNavigate } from 'react-router-dom';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppsStarredIcon from '@crema/components/AppsStarredIcon';
import StatusToggleButton from './StatusToggleButton';
import AppsDeleteIcon from '@crema/components/AppsDeleteIcon';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AppTooltip from '@crema/components/AppTooltip';

const TaskDetailHeader = (props) => {
  const { selectedTask } = props;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickBackButton = () => {
    navigate(-1);
  };

  const onChangeStarred = (checked) => {
    dispatch(onUpdateSelectedCalTask({ ...selectedTask, isStarred: checked }));
  };

  const onDeleteTask = () => {
    dispatch(onUpdateSelectedCalTask({ ...selectedTask, folderValue: 126 }));
    navigate(-1);
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

      <StatusToggleButton selectedTask={selectedTask} />

      <Box
        component='span'
        sx={{
          marginLeft: 'auto',
          display: { xs: 'none', sm: 'block' },
        }}
        onChange={onChangeStarred}
      >
        <AppsStarredIcon item={selectedTask} onChange={onChangeStarred} />
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
};
