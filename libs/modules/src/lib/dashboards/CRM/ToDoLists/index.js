import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppList from '@crema/components/AppList';
import TodoCell from './TodoCell';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const ToDoLists = ({ data }) => {
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.crm.toDoLists']}
      contentStyle={{ paddingLeft: 0, paddingRight: 0 }}
      action={messages['common.viewAll']}
    >
      <AppScrollbar style={{ paddingLeft: 20, paddingRight: 20 }}>
        <AppList
          data={data}
          renderRow={(todo) => <TodoCell key={todo.id} todo={todo} />}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default ToDoLists;

ToDoLists.propTypes = {
  data: PropTypes.array,
};
