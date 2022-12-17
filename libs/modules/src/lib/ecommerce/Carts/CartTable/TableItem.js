import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import CancelIcon from '@mui/icons-material/Cancel';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {Fonts} from '@crema/constants/AppEnums'
import {styled} from '@mui/material/styles';
import {useInfoViewActionsContext} from '@crema/context/InfoViewContextProvider';
import {postDataApi, putDataApi} from '@crema/utility/APIHooks';

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: 14,
  padding: 8,
  '&:first-of-type': {
    paddingLeft: 20,
  },
  '&:last-of-type': {
    paddingRight: 20,
  },
}));
const TableItem = ({data, setTableData}) => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const onRemoveItem = (product) => {
    postDataApi('/api/cart/remove', infoViewActionsContext, {
      product,
    })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onDecrement = () => {
    if (data.count > 0) {
      putDataApi('/api/cart/update', infoViewActionsContext, {
        product: {...data, count: data.count - 1},
      })
        .then((data) => {
          setTableData(data);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    } else {
      postDataApi('/api/cart/remove', infoViewActionsContext, {
        product: data,
      })
        .then((data) => {
          setTableData(data);
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };
  const onIncrement = () => {
    putDataApi('/api/cart/update', infoViewActionsContext, {
      product: {...data, count: data.count + 1},
    })
      .then((data) => {
        setTableData(data);
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  return (
    <TableRow key={data.name} className='item-hover'>
      <StyledTableCell>
        <Box display='flex'>
          <Avatar sx={{mr: 3.5}} src={data.image} />
          <Box>
            <Box fontSize={14} fontWeight={Fonts.MEDIUM}>
              {data.title}
            </Box>
            <Box color='text.secondary' fontSize={14}>
              Brand: {data.brand}
            </Box>
          </Box>
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left' fontWeight={Fonts.MEDIUM}>
        ${+data.mrp - +data.discount}
      </StyledTableCell>
      <StyledTableCell align='left'>
        <Box
          border={1}
          borderRadius={4}
          display='flex'
          borderColor='text.secondary'
          alignItems='center'
          justifyContent='center'
          width={100}
          height={36}
        >
          <AddIcon className='pointer' onClick={onIncrement} />
          <Box component='span' px={3}>
            {data.count}
          </Box>
          <RemoveIcon className='pointer' onClick={onDecrement} />
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left' fontWeight={Fonts.MEDIUM}>
        ${(+data.mrp - +data.discount) * +data.count}
      </StyledTableCell>
      <StyledTableCell component='th' scope='row'>
        <CancelIcon onClick={() => onRemoveItem(data)} />
      </StyledTableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
  setTableData: PropTypes.func,
};
