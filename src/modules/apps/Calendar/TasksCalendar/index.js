import React, {useState} from 'react';
import AppsContent from '@crema/components/AppsContainer/AppsContent';
import {TaskCalender} from '@crema/modules/apps/Calendar';
import {
  useCalendarActionsContext,
  useCalendarContext,
} from '../../context/CalendarContextProvider';

const TasksCalendar = () => {
  // const infoViewActionsContext = useInfoViewActionsContext();
  const {taskLists} = useCalendarContext();
  const {setCalenderData, reCallAPI} = useCalendarActionsContext();

  const [filterText, onSetFilterText] = useState('');

  /*const [checkedTasks, setCheckedTasks] = useState([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
    console.log('onOpenAddTask');
  };*/
  /*
  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onChangeCheckedTasks = (event, id) => {
    if (event.target.checked) {
      setCheckedTasks(checkedTasks.concat(id));
    } else {
      setCheckedTasks(checkedTasks.filter((taskId) => taskId !== id));
    }
  };

  const onChangeStarred = (checked, task) => {
    putDataApi('/api/calendar/update/starred', infoViewActionsContext, {
      taskIds: [task.id],
      status: checked,
    })
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        infoViewActionsContext.showMessage(
          data[0].isStarred
            ? 'Todo Marked as Starred Successfully'
            : 'Todo Marked as Unstarred Successfully',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };*/

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskLists?.data;
    } else {
      return taskLists?.data.filter((task) =>
        task.title.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  /*const onUpdateSelectedTask = (task) => {
    setCalenderData({
      data: taskLists?.data.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      }),
      count: taskLists?.count,
    });
  };*/

  /*  const onUpdateTasks = (tasks) => {
    setCalenderData({
      data: taskLists?.data.map((item) => {
        const contact = tasks.find((contact) => contact.id === item.id);
        if (contact) {
          return contact;
        }
        return item;
      }),
      count: taskLists?.count,
    });
  };*/
  const onUpdateTask = (task) => {
    setCalenderData({
      data: taskLists?.data.map((item) => (item.id === task.id ? task : item)),
      count: taskLists?.count,
    });
  };
  /*
  const onDeleteTask = (task) => {
    task.folderValue = 126;
    setCalenderData({
      data: taskLists?.data.filter((item) => item.id !== task.id),
      count: taskLists?.count - 1,
    });
  };*/
  const list = onGetFilteredItems();

  return (
    <AppsContent fullView>
      <TaskCalender
        reCallAPI={reCallAPI}
        // onOpenAddTask={onOpenAddTask}
        taskList={list}
        onUpdateTask={onUpdateTask}
        onSetFilterText={onSetFilterText}
      />
    </AppsContent>
  );
};

export default TasksCalendar;
