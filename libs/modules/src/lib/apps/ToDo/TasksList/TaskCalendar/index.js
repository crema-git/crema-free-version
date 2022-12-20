import React, { useState } from 'react';
import { momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import AddNewTask from '../../AddNewTask';
import PropTypes from 'prop-types';
import { StyledCalendar } from './Calendar.style';
import { Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import './calendar.css';
import AppTooltip from '@crema/components/AppTooltip';
import CustomToolbar from './CustomToolbar';

const localizer = momentLocalizer(moment);

const TaskCalender = ({ taskList }) => {
  const [isAddTaskOpen, setAddTaskOpen] = useState(false);
  const navigate = useNavigate();
  const { folder, label } = useParams();
  console.log('taskList:', taskList);
  const [selectedDate, setSelectedDate] = useState(null);

  const onSelectDate = ({ start }) => {
    setSelectedDate(start);
    setAddTaskOpen(true);
  };

  const onOpenAddTask = () => {
    if (selectedDate) {
      setAddTaskOpen(true);
    } else {
      setAddTaskOpen(false);
    }
  };

  const onViewTaskDetail = (task) => {
    if (folder) navigate(`/apps/todo/${folder}/${task.id}`);
    if (label) navigate(`/apps/todo/label/${label}/${task.id}`);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };
  const getEvents = () => {
    if (taskList?.length > 0)
      return taskList.map((task) => {
        return {
          ...task,
          title: task.title,
          start: task.startDate,
          end: task.startDate,
          allDay: true,
        };
      });
    return [];
  };
  return (
    <>
      <StyledCalendar
        localizer={localizer}
        events={getEvents()}
        views={['month', 'agenda']}
        tooltipAccessor={null}
        showMultiDayTimes
        selectable
        onSelectEvent={onViewTaskDetail}
        components={{
          toolbar: CustomToolbar,
          event: (item) => (
            <AppTooltip title={item.title}>
              <Box
                sx={{
                  backgroundColor: item?.event?.priority?.color,
                  borderRadius: 10,
                  px: 2.5,
                  py: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {item.title}
              </Box>
            </AppTooltip>
          ),
        }}
        popup
        onSelectSlot={onSelectDate}
        defaultView="month"
      />

      {isAddTaskOpen ? (
        <AddNewTask
          selectedDate={selectedDate}
          onOpenAddTask={onOpenAddTask}
          onCloseAddTask={onCloseAddTask}
          isAddTaskOpen={isAddTaskOpen}
        />
      ) : null}
    </>
  );
};
export default TaskCalender;
TaskCalender.propTypes = {
  taskList: PropTypes.any,
};
