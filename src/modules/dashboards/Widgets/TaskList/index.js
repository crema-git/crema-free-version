import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import AppList from '@crema/components/AppList';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';

const getData = (data) => {
  return data;
};

const TaskList = (props) => {
  const data = getData(props.data);

  const {messages} = useIntl();
  return (
    <AppCard
      title={messages['dashboard.taskList']}
      contentStyle={{px: 0}}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
    >
      <AppScrollbar
        sx={{
          height: 263,
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return <TaskItem key={item.id} item={item} />;
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default TaskList;

TaskList.defaultProps = {
  data: [],
};

TaskList.propTypes = {
  data: PropTypes.array,
};
