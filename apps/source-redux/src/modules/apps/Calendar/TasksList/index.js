import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetCalPriorityList,
  onGetCalStatusList,
  onGetCalTaskList,
  onUpdateSelectedCalTask,
} from '../../../../redux/actions';
import { useParams } from 'react-router-dom';
import AddNewTask from '../AddNewTask';
import AppsContent from '@crema/components/AppsContent';
import { TaskCalender } from '@crema/modules/apps/Calendar';

const TasksList = ({ filterData }) => {
  const dispatch = useDispatch();

  const { folder, label } = useParams();

  const taskList = useSelector(({ calendarApp }) => calendarApp.taskList);

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const getFilterData = () => {
    console.log('taskList', taskList)
    if (taskList) {
      const data = taskList.filter((task) => {
        let status = true;
        if (filterData.status.length > 0) {
          status = filterData.status.includes(task.status);
        }
        let priority = true;
        if (filterData.priority.length > 0) {
          priority = filterData.priority.includes(task.priority.id);
        }
        return status && priority;
      });
      return {
        data,
        count: data.length,
      };
    }
    return [];
  };

  useEffect(() => {
    setPage(0);
    dispatch(onGetCalPriorityList());
    dispatch(onGetCalStatusList());
    if (folder) dispatch(onGetCalTaskList('folder', folder, page));
    if (label) dispatch(onGetCalTaskList('label', label, page));
  }, [dispatch, page, folder, label]);

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onGetFilteredItems = () => {
    if (!taskList) return [];
    if (filterText === '') {
      return getFilterData().data;
    } else {
      return getFilterData().data.filter((task) =>
        task.title.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const onUpdateTask = (task) => {
    dispatch(onUpdateSelectedCalTask(task));
  };
  const list = onGetFilteredItems();

  return (
    <>
      <AppsContent fullView>
        <TaskCalender
          taskList={list}
          onUpdateTask={onUpdateTask}
          onSetFilterText={onSetFilterText}
        />
      </AppsContent>

      {isAddTaskOpen ? (
        <AddNewTask
          isAddTaskOpen={isAddTaskOpen}
          onCloseAddTask={onCloseAddTask}
        />
      ) : null}
    </>
  );
};

export default TasksList;
