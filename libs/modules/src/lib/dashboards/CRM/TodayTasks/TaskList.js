import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PropTypes from 'prop-types';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import { Fonts } from '@crema/constants/AppEnums';

import AppList from '@crema/components/AppList';

const TaskList = ({ todayTaskData }) => {
  const [taskList, handleList] = useState(todayTaskData);

  const handleChange = (e, task) => {
    task.isChecked = e.target.checked;
    const list = taskList.map((item) => (item.id === task.id ? task : item));
    handleList(list);
  };

  return (
    <List>
      <AppList
        data={taskList}
        renderRow={(task) => {
          return (
            <ListItem
              key={task.id}
              sx={{
                px: 5,
                py: 2,
              }}
              className="item-hover"
            >
              <ListItemIcon
                sx={{
                  marginTop: -2,
                  minWidth: 0,
                  width: { xs: 35, xl: 40 },
                }}
              >
                <Box
                  sx={{
                    mr: 2,
                    ml: -2,
                  }}
                >
                  <Checkbox
                    color="primary"
                    checked={task.isChecked}
                    onChange={(e) => handleChange(e, task)}
                  />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box
                    sx={{
                      fontWeight: Fonts.MEDIUM,
                      fontSize: 14,
                      color: task.isChecked ? 'text.secondary' : 'text.primary',
                    }}
                    component="span"
                  >
                    {task.task}
                  </Box>
                }
                secondary={
                  <Box
                    component="span"
                    sx={{
                      fontSize: 12,
                    }}
                  >
                    <IntlMessages id="common.scheduled" /> {task.date}
                  </Box>
                }
              />
            </ListItem>
          );
        }}
      />
    </List>
  );
};

export default TaskList;

TaskList.defaultProps = {
  todayTaskData: [],
};

TaskList.propTypes = {
  todayTaskData: PropTypes.array,
};
