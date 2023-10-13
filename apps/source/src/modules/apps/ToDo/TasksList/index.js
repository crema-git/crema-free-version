import React, { useState } from 'react';
import TaskContentHeader from './TaskContentHeader';
import { Hidden } from '@mui/material';
import AppsPagination from '@crema/components/AppsPagination';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import AppsFooter from '@crema/components/AppsFooter';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import TodoListSkeleton from '@crema/components/TodoListSkeleton';
import AppList from '@crema/components/AppList';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { TaskListItem, TaskListItemMobile } from '@crema/modules/apps/ToDo';
import {
  useTodoActionsContext,
  useTodoContext,
} from '../../context/TodoContextProvider';
import AddNewTask from '../AddNewTask';

const TasksList = () => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { taskLists, loading, page } = useTodoContext();
  const { setTodoData, onPageChange } = useTodoActionsContext();

  const [filterText, onSetFilterText] = useState('');

  const [checkedTasks, setCheckedTasks] = useState([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  const onOpenAddTask = () => {
    setAddTaskOpen(true);
  };

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
    putDataApi('/api/todo/update/starred', infoViewActionsContext, {
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
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return taskLists?.data;
    } else {
      return taskLists?.data.filter((task) =>
        task.title.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const onUpdateSelectedTask = (task) => {
    setTodoData({
      data: taskLists?.data.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      }),
      count: taskLists?.count,
    });
  };

  const onUpdateTasks = (tasks) => {
    setTodoData({
      data: taskLists?.data.map((item) => {
        const contact = tasks.find((contact) => contact.id === item.id);
        if (contact) {
          return contact;
        }
        return item;
      }),
      count: taskLists?.count,
    });
  };
  const onUpdateTask = (task) => {
    setTodoData({
      data: taskLists?.data.map((item) => (item.id === task.id ? task : item)),
      count: taskLists?.count,
    });
  };

  const onDeleteTask = (task) => {
    task.folderValue = 126;
    setTodoData({
      data: taskLists?.data.filter((item) => item.id !== task.id),
      count: taskLists?.count - 1,
    });
  };
  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <TaskContentHeader
          onUpdateTasks={onUpdateTasks}
          checkedTasks={checkedTasks}
          setCheckedTasks={setCheckedTasks}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
        />
      </AppsHeader>
      <AppsContent>
        <Hidden smDown>
          <AppList
            data={list}
            renderRow={(task) => (
              <TaskListItem
                key={task.id}
                task={task}
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
      </AppsContent>

      <Hidden smUp>
        {taskLists?.data?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={taskLists?.count}
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
