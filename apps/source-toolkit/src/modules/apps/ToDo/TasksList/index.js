import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  onDeleteSelectedTasks,
  onGetTaskList,
  onUpdateTaskStarredStatus,
} from '../../../../toolkit/actions';
import TaskContentHeader from './TaskContentHeader';
import { useParams } from 'react-router-dom';
import AddNewTask from '../AddNewTask';
import { Hidden } from '@mui/material';
import AppsPagination from '@crema/components/AppsPagination';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import AppsFooter from '@crema/components/AppsFooter';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import TodoListSkeleton from '@crema/components/TodoListSkeleton';
import AppList from '@crema/components/AppList';
import {
  TaskCalender,
  TaskListItem,
  TaskListItemMobile,
} from '@crema/modules/apps/ToDo';

export const ViewMode = {
  List: 'list',
  Calendar: 'calendar',
};
const TasksList = () => {
  const dispatch = useDispatch();

  const { folder, label } = useParams();

  const taskList = useSelector(({ todoApp }) => todoApp.taskList);

  const totalTasks = useSelector(({ todoApp }) => todoApp.totalTasks);

  const labelList = useSelector(({ todoApp }) => todoApp.labelList);

  const loading = useSelector(({ common }) => common.loading);

  const [filterText, onSetFilterText] = useState('');
  const [viewMode, setViewMode] = useState(ViewMode.List);

  const [page, setPage] = useState(0);

  const [checkedTasks, setCheckedTasks] = useState([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  useEffect(() => {
    setPage(0);
    if (folder) dispatch(onGetTaskList('folder', folder, page));
    if (label) dispatch(onGetTaskList('label', label, page));
  }, [dispatch, page, folder, label]);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

  const onCloseAddTask = () => {
    setAddTaskOpen(false);
  };

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangeCheckedTasks = (event, id) => {
    if (event.target.checked) {
      setCheckedTasks(checkedTasks.concat(id));
    } else {
      setCheckedTasks(checkedTasks.filter((taskId) => taskId !== id));
    }
  };

  const onChangeStarred = (checked, task) => {
    if (folder) dispatch(onUpdateTaskStarredStatus([task.id], checked, folder));
    if (label) dispatch(onUpdateTaskStarredStatus([task.id], checked, label));
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskList;
    } else {
      return taskList.filter((task) =>
        task.title.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };
  const onDeleteTask = (task) => {
    if (folder)
      dispatch(onDeleteSelectedTasks([task.id], 'folder', folder, page));
    if (label) dispatch(onDeleteSelectedTasks([task.id], 'label', label, page));
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <TaskContentHeader
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          viewMode={viewMode}
          onViewModeSelect={setViewMode}
          onPageChange={onPageChange}
          page={page}
        />
      </AppsHeader>
      <AppsContent>
        {viewMode === ViewMode.Calendar ? (
          <TaskCalender taskList={list} />
        ) : (
          <>
            <Hidden smDown>
              <AppList
                data={list}
                renderRow={(task) => (
                  <TaskListItem
                    key={task.id}
                    task={task}
                    labelList={labelList}
                    onChangeCheckedTasks={onChangeCheckedTasks}
                    checkedTasks={checkedTasks}
                    onChangeStarred={onChangeStarred}
                    onDeleteTask={onDeleteTask}
                  />
                )}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={loading}
                    actionTitle='Add Task'
                    onAction={onOpenAddTask}
                    placeholder={<TodoListSkeleton />}
                  />
                }
              />
            </Hidden>

            <Hidden smUp>
              <AppList
                sx={{
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
                data={list}
                renderRow={(task) => (
                  <TaskListItemMobile
                    key={task.id}
                    task={task}
                    labelList={labelList}
                    checkedTasks={checkedTasks}
                    onChangeStarred={onChangeStarred}
                  />
                )}
                ListEmptyComponent={
                  <ListEmptyResult
                    loading={loading}
                    actionTitle='Add Task'
                    onAction={onOpenAddTask}
                    placeholder={<TodoListSkeleton />}
                  />
                }
              />
            </Hidden>
          </>
        )}
      </AppsContent>

      <Hidden smUp>
        {taskList.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={totalTasks}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>

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
