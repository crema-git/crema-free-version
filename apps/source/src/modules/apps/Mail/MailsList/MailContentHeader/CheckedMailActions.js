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
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import AppTooltip from '@crema/components/AppTooltip';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';

const CheckedMailActions = (props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { checkedMails, setCheckedMails, setData } = props;
  const [isLabelOpen, onOpenLabel] = useState(null);

  const [isMoveToOpen, onOpenMoveToIcon] = useState(null);

  const [{ apiData: labelList }] = useGetDataApi(
    '/api/mailApp/labels/list',
    []
  );

  const [{ apiData: folderList }] = useGetDataApi(
    '/api/mailApp/folders/list',
    []
  );

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
    putDataApi('/api/mailApp/update/folder', infoViewActionsContext, {
      mailIds: checkedMails,
      type,
    })
      .then((data) => {
        setData(data);
        infoViewActionsContext.showMessage('Mail moved to folder successfully');
        setCheckedMails([]);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onSelectLabel = (event) => {
    const labelType = labelList.find(
      (label) => label.id === event.target.value
    );
    putDataApi('/api/mailApp/update/label', infoViewActionsContext, {
      mailIds: checkedMails,
      type: labelType,
    })
      .then((data) => {
        setData(data);
        setCheckedMails([]);
        onOpenLabel(null);
        infoViewActionsContext.showMessage('Mail moved to folder successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <AppTooltip title={<IntlMessages id="common.archive" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={() => onChangeMailFolder(127)}
          size="large"
        >
          <ArchiveOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <AppTooltip title={<IntlMessages id="common.reportSpam" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={() => onChangeMailFolder(125)}
          size="large"
        >
          <InfoOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <AppTooltip title={<IntlMessages id="common.trash" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={() => onChangeMailFolder(126)}
          size="large"
        >
          <DeleteOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
          />
        </IconButton>
      </AppTooltip>

      <AppTooltip title={<IntlMessages id="common.label" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onLabelOpen}
          size="large"
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

      <AppTooltip title={<IntlMessages id="common.moveTo" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          onClick={onMoveToOpen}
          size="large"
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
  setData: PropTypes.func,
};
