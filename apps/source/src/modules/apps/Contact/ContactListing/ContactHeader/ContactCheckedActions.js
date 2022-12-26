import React from 'react';
import Box from '@mui/material/Box';
import IntlMessages from '@crema/helpers/IntlMessages';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import { Hidden } from '@mui/material';
import AppTooltip from '@crema/components/AppTooltip';
import { putDataApi } from '@crema/hooks/APIHooks';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';

const ContactCheckedActions = (props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    onSelectContactsForDelete,
    onUpdateContacts,
  } = props;

  const infoViewActionsContext = useInfoViewActionsContext();

  const [isLabelOpen, onOpenLabel] = React.useState(null);

  const onLabelOpen = (event) => {
    onOpenLabel(event.currentTarget);
  };

  const onLabelClose = () => {
    onOpenLabel(null);
  };

  const onSelectLabel = (event) => {
    const labelType = event.target.value;
    putDataApi('/api/contactApp/update/label', infoViewActionsContext, {
      contactIds: checkedContacts,
      type: +labelType,
    })
      .then((data) => {
        onUpdateContacts(data);
        setCheckedContacts([]);
        onLabelClose();
        infoViewActionsContext.showMessage('Contact Updated Successfully');
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <Box
      component="span"
      sx={{
        display: 'flex',
        alignItems: 'center',
        mr: { xs: 2, xl: 3 },
      }}
    >
      <AppTooltip title={<IntlMessages id="common.delete" />}>
        <IconButton
          sx={{
            color: (theme) => theme.palette.text.disabled,
          }}
          size="large"
        >
          <DeleteOutlinedIcon
            sx={{
              cursor: 'pointer',
              display: 'block',
            }}
            onClick={() => onSelectContactsForDelete(checkedContacts)}
          />
        </IconButton>
      </AppTooltip>

      <Hidden smDown>
        <AppTooltip title={<IntlMessages id="common.label" />}>
          <IconButton
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            size="large"
          >
            <LabelOutlinedIcon
              sx={{
                cursor: 'pointer',
                display: 'block',
              }}
              value={1}
              onClick={onLabelOpen}
            />
          </IconButton>
        </AppTooltip>
      </Hidden>

      <Menu
        anchorEl={isLabelOpen}
        keepMounted
        elevation={0}
        open={Boolean(isLabelOpen)}
        onClose={onLabelClose}
      >
        <MenuItem value={311} onClick={onSelectLabel}>
          <IntlMessages id="common.crema" />
        </MenuItem>
        <MenuItem value={312} onClick={onSelectLabel}>
          <IntlMessages id="common.personal" />
        </MenuItem>
        <MenuItem value={313} onClick={onSelectLabel}>
          <IntlMessages id="common.work" />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default ContactCheckedActions;

ContactCheckedActions.propTypes = {
  checkedContacts: PropTypes.array.isRequired,
  setCheckedContacts: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onUpdateContacts: PropTypes.func,
};
