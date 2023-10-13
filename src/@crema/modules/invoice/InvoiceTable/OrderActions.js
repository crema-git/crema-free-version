import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';

const OrderActions = ({id, data, status, onChangeStatus}) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  let orderList = [];

  switch (status) {
    case 120: {
      orderList = [
        {status: 121, label: 'Mark as Paid'},
        {status: 122, label: 'Mark as Declined'},
        {status: 123, label: 'Mark as Cancelled'},
      ];
      break;
    }
    case 121: {
      orderList = [
        {status: 123, label: 'Mark as Cancelled'},
        {status: 122, label: 'Mark as Declined'},
      ];
      break;
    }
    case 122: {
      orderList = [
        {
          status: 121,
          label: 'Mark as Paid',
        },
        {
          status: 123,
          label: 'Mark as Cancelled',
        },
      ];
      break;
    }
    case 123: {
      orderList = [
        {
          status: 121,
          label: 'Mark as Paid',
        },
        {
          status: 122,
          label: 'Mark as Declined',
        },
      ];
      break;
    }
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton
        aria-controls='alpha-menu'
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id='alpha-menu'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          style={{fontSize: 14}}
          onClick={() => navigate(`/invoice/pdf/${id}`)}
        >
          View Invoice
        </MenuItem>
        {orderList?.map((item, index) => (
          <MenuItem
            key={index}
            style={{fontSize: 14}}
            onClick={() => onChangeStatus(data, item.status)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

OrderActions.propTypes = {
  id: PropTypes.string,
  data: PropTypes.object,
  status: PropTypes.number,
  onChangeStatus: PropTypes.func,
};

export default OrderActions;
