import React from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import {
  onDeleteSelectedTasks,
  onUpdateTaskLabels,
} from '../../../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import AppsDeleteIcon from '@crema/components/AppsDeleteIcon';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@crema/components/AppTooltip';
import { StyledBox } from './index.style';

const CheckedTasksActions = ({ checkedTasks, setCheckedTasks, page }) => {
  const { folder, label } = useParams();
  const dispatch = useDispatch();
  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const labelList = useSelector(({ todoApp }) => todoApp.labelList);

  const onLabelOpen = (event) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onDeleteTasks = () => {
    if (folder)
      dispatch(onDeleteSelectedTasks(checkedTasks, 'folder', folder, page));
    if (label)
      dispatch(onDeleteSelectedTasks(checkedTasks, 'label', label, page));

    setCheckedTasks([]);
  };

  const onSelectLabel = (event) => {
    const labelType = event.target.value;
    dispatch(onUpdateTaskLabels(checkedTasks, labelType));
    setCheckedTasks([]);
    onLabelClose();
  };

  return (
    <>
      <StyledBox component='span'>
        <Box component='span'>
          <AppsDeleteIcon
            deleteAction={onDeleteTasks}
            deleteTitle={<IntlMessages id='todo.deleteMessage' />}
            sx={{
              cursor: 'pointer',
              color: 'text.disabled',
            }}
          />
        </Box>

        <Box component='span'>
          <AppTooltip title={<IntlMessages id='common.label' />}>
            <IconButton
              sx={{
                color: 'text.disabled',
              }}
              size='large'
              onClick={onLabelOpen}
            >
              <LabelOutlinedIcon
                sx={{
                  cursor: 'pointer',
                  color: 'text.disabled',
                  display: 'block',
                }}
                value={1}
              />
            </IconButton>
          </AppTooltip>
        </Box>
      </StyledBox>
      <Menu
        anchorEl={isLabelOpen}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        {labelList.map((label) => {
          return (
            <MenuItem
              key={label.id}
              sx={{ p: '8px !important' }}
              value={label.id}
              onClick={onSelectLabel}
            >
              {label.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default CheckedTasksActions;

CheckedTasksActions.propTypes = {
  checkedTasks: PropTypes.array.isRequired,
  setCheckedTasks: PropTypes.func,
  page: PropTypes.number.isRequired,
};
