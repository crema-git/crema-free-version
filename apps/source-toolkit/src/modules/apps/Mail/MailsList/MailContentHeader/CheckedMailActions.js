import React, { useState } from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import Box from '@mui/material/Box';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShopTwoOutlinedIcon from '@mui/icons-material/ShopTwoOutlined';
import {
  onUpdateMailFolders,
  onUpdateMailLabels,
} from '../../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@crema/components/AppTooltip';

const CheckedMailActions = (props) => {
  const { checkedMails, setCheckedMails } = props;
  const dispatch = useDispatch();
  const [isLabelOpen, onOpenLabel] = useState(null);

  const [isMoveToOpen, onOpenMoveToIcon] = useState(null);

  const labelList = useSelector(({ mailApp }) => mailApp.labelList);

  const folderList = useSelector(({ mailApp }) => mailApp.folderList);

  const onLabelOpen = (event) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onMoveToOpen = (event) => {
    onOpenMoveToIcon(event.currentTarget);
  };

  const onMoveToClose = () => {
    onOpenMoveToIcon(null);
  };

  const onChangeMailFolder = (type) => {
    dispatch(onUpdateMailFolders(checkedMails, type));
    setCheckedMails([]);
  };

  const onSelectLabel = (event) => {
    const labelType = labelList.find(
      (label) => label.id === event.target.value,
    );
    dispatch(onUpdateMailLabels(checkedMails, labelType));
    setCheckedMails([]);
    onOpenLabel(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AppTooltip title={<IntlMessages id='common.archive' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={() => onChangeMailFolder(127)}
          size='large'
        >
          <ArchiveOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <AppTooltip title={<IntlMessages id='common.reportSpam' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={() => onChangeMailFolder(125)}
          size='large'
        >
          <InfoOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <AppTooltip title={<IntlMessages id='common.trash' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={() => onChangeMailFolder(126)}
          size='large'
        >
          <DeleteOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <AppTooltip title={<IntlMessages id='common.label' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onLabelOpen}
          size='large'
        >
          <LabelOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
            value={1}
          />
        </IconButton>
      </AppTooltip>

      <Menu
        anchorEl={isLabelOpen}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        {labelList.map((label) => {
          return (
            <MenuItem onClick={onSelectLabel} value={label.id} key={label.id}>
              {label.name}
            </MenuItem>
          );
        })}
      </Menu>

      <AppTooltip title={<IntlMessages id='common.moveTo' />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onMoveToOpen}
          size='large'
        >
          <ShopTwoOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <Menu
        anchorEl={isMoveToOpen}
        open={Boolean(isMoveToOpen)}
        onClose={onMoveToClose}
      >
        {folderList.map((folder) => {
          return (
            <MenuItem
              onClick={() => onChangeMailFolder(folder.id)}
              key={folder.id}
            >
              {folder.name}
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};

export default CheckedMailActions;

CheckedMailActions.defaultProps = {
  checkedMails: [],
};

CheckedMailActions.propTypes = {
  checkedMails: PropTypes.array.isRequired,
  setCheckedMails: PropTypes.func,
};
