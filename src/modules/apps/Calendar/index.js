import React from 'react';
import TaskSideBar from './TaskSideBar/index';
import TasksCalendar from './TasksCalendar';
import TaskDetail from './TaskDetail';
import PropTypes from 'prop-types';
import {useIntl} from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import clsx from 'clsx';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';
import CalendarContextProvider from '../context/CalendarContextProvider';

const Calendar = () => {
  const {id} = useParams();
  const {messages} = useIntl();

  return (
    <CalendarContextProvider>
      <AppsContainer
        title={messages['todo.todoApp']}
        sidebarContent={<TaskSideBar />}
      >
        <TasksCalendar />
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
    </CalendarContextProvider>
  );
};

export default Calendar;

Calendar.propTypes = {
  match: PropTypes.object,
};
