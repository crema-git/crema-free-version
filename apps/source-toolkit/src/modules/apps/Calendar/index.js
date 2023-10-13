import React, { useEffect, useState } from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksList from './TasksList';
import TaskDetail from './TaskDetail';
import { useDispatch } from 'react-redux';
import {
  onGetToDoFolderList,
  onGetToDoLabelList,
  onGetToDoPriorityList,
  onGetToDoStaffList,
  onGetToDoStatusList,
} from '../../../toolkit/actions';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

const ToDo = () => {
  const [filterData, setFilterData] = useState({
    status: [],
    priority: [],
  });

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(onGetToDoLabelList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoFolderList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoPriorityList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStaffList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(onGetToDoStatusList());
  }, [dispatch]);

  const { messages } = useIntl();
  return (
    <AppsContainer
      title={messages['todo.calendarApp']}
      sidebarContent={
        <TaskSideBar filterData={filterData} setFilterData={setFilterData} />
      }
    >
      <TasksList filterData={filterData} setFilterData={setFilterData} />
      <Box
        sx={{
          transition: 'all 0.5s ease',
          transform: 'translateX(100%)',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          opacity: 0,
          visibility: 'hidden',
          backgroundColor: 'background.paper',
          '&.show': {
            transform: 'translateX(0)',
            opacity: 1,
            visibility: 'visible',
          },
        }}
        className={clsx({
          show: id,
        })}
      >
        <TaskDetail />
      </Box>
    </AppsContainer>
  );
};

export default ToDo;

ToDo.propTypes = {
  match: PropTypes.object,
};
