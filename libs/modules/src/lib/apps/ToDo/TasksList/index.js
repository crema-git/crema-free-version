import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TaskContentHeader from './TaskContentHeader';
import TaskListItem from './TaskListItem';
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
import TaskListItemMobile from './TaskListItemMobile';
import TaskCalender from './TaskCalendar';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';

export const ViewMode = {
  List: 'list',
  Calendar: 'calendar',
};
const TasksList = ({ taskLists, loading, setQueryParams, setData }) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const params = useParams();

  const [{ apiData: labelList }] = useGetDataApi('/api/todo/labels/list', []);

  const [filterText, onSetFilterText] = useState('');
  const [viewMode, setViewMode] = useState(ViewMode.List);

  const [page, setPage] = useState(0);

  const [checkedTasks, setCheckedTasks] = useState([]);

  const [isAddTaskOpen, setAddTaskOpen] = React.useState(false);

  useEffect(() => {
    setPage(0);
    setQueryParams({
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    });
  }, [page, params]);

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
    putDataApi('/api/todo/update/starred', infoViewActionsContext, {
      taskIds: [task.id],
      status: checked,
    })
      .then((data) => {
        onUpdateSelectedTask(data[0]);
        infoViewActionsContext.showMessage(
          data[0].isStarred
            ? 'Todo Marked as Starred Successfully'
            : 'Todo Marked as Unstarred Successfully'
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
        task.title.toUpperCase().includes(filterText.toUpperCase())
      );
    }
  };

  const onUpdateSelectedTask = (task) => {
    setData({
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
    setData({
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

  const onDeleteTask = (task) => {
    task.folderValue = 126;
    setData({
      data: taskLists?.data.filter((item) => item.id !== task.id),
      count: taskLists?.count - 1,
    });
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <TaskContentHeader
          taskLists={taskLists?.data}
          totalTasks={taskLists?.count}
          onUpdateTasks={onUpdateTasks}
          setData={setData}
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
                    actionTitle="Add Task"
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
                    actionTitle="Add Task"
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
TasksList.propTypes = {
  taskLists: PropTypes.array,
  loading: PropTypes.bool,
  setQueryParams: PropTypes.func,
  setData: PropTypes.func,
};
