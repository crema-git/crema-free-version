import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import OrderActions from './OrderActions';
import { styled } from '@mui/material/styles';
import { ellipsisLines } from '@crema/helpers';
import { useNavigate } from 'react-router-dom';

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
const TableItem = ({ data }) => {
  const navigate = useNavigate();
  const getPaymentStatusColor = () => {
    switch (data.inStock) {
      case true: {
        return '#43C888';
      }
      case false: {
        return '#F84E4E';
      }
    }
  };

  return (
    <TableRow key={data.name} className='item-hover'>
      <StyledTableCell align='left' sx={{ width: 400 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'primary.main',
          }}
          onClick={() => navigate(`/ecommerce/product_detail/${data?.id}`)}
        >
          <img
            style={{
              width: '40px',
              height: '40px',
              objectFit: 'contain',
              marginRight: 10,
            }}
            src={data?.image?.[0]?.src}
            alt='crema-logo'
          />
          {ellipsisLines(data.title)}
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left'>{data.SKU}</StyledTableCell>
      <StyledTableCell align='left'>{data.createdAt}</StyledTableCell>
      <StyledTableCell align='left'>
        <Box
          sx={{
            color: getPaymentStatusColor(),
            backgroundColor: getPaymentStatusColor() + '44',
            padding: '3px 5px',
            borderRadius: 1,
            fontSize: 14,
            display: 'inline-block',
          }}
        >
          {data.inStock ? 'In Stock' : 'Out of Stock'}
        </Box>
      </StyledTableCell>
      <StyledTableCell align='left'>${data.mrp}</StyledTableCell>
      <TableCell align='right'>
        <OrderActions id={data.id} />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;

TableItem.propTypes = {
  data: PropTypes.object.isRequired,
};
