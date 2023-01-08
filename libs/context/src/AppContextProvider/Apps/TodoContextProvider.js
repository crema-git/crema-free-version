import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation, useParams } from 'react-router-dom';

const TodoContext = createContext();
const TodoActionsContext = createContext();

export const useTodo = () => useContext(TodoContext);

export const useTodoActions = () => useContext(TodoActionsContext);

export const TodoAuthProvider = ({ children }) => {
  const params = useParams();
  const { pathname } = useLocation();
  const [{ apiData: labelList }] = useGetDataApi('/api/todo/labels/list');
  const [{ apiData: priorityList }] = useGetDataApi('/api/todo/priority/list');
  const [{ apiData: staffList }] = useGetDataApi('/api/todo/staff/list');
  const [{ apiData: folderList }] = useGetDataApi('/api/todo/folders/list', []);
  const [{ apiData: statusList }] = useGetDataApi('/api/todo/status/list', []);
  const [page, setPage] = useState(0);

  const [
    { apiData: taskLists, loading },
    { setQueryParams, setData: setTodoData, reCallAPI },
  ] = useGetDataApi('/api/todo/task/list', undefined, {}, false);

  useEffect(() => {
    setPage(0);
    setQueryParams({
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    });
  }, [page, pathname]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  console.log('taskListssdssd', taskLists);

  return (
    <TodoContext.Provider
      value={{
        labelList,
        priorityList,
        staffList,
        statusList,
        folderList,
        taskLists,
        loading,
        page,
      }}
    >
      <TodoActionsContext.Provider
        value={{
          setTodoData,
          onPageChange,
          setQueryParams,
          reCallAPI,
        }}
      >
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
};
export default TodoAuthProvider;

TodoAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
