import React from 'react';
import { alpha, Box, Hidden, Stack } from '@mui/material';
import AppSearch from '@crema/components/AppSearchBar';
import ListIcon from '@mui/icons-material/List';
import AppsIcon from '@mui/icons-material/Apps';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import AppsPagination from '@crema/components/AppsPagination';
import { VIEW_TYPE } from '../index';

const IconBtn = styled(IconButton)(({ theme }) => {
  return {
    color: theme.palette.text.disabled,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    padding: 8,
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
    },
    '&.active': {
      color: theme.palette.primary.main,
    },
  };
});
const ProductHeader = ({
  onSearch,
  viewType,
  list,
  page,
  totalProducts,
  onPageChange,
  setViewType,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Box sx={{ mr: 3 }}>
        <AppSearch
          placeholder="Search here"
          onChange={(e) => onSearch(e.target.value)}
        />
      </Box>

      <Stack
        spacing={2}
        direction="row"
        sx={{
          display: 'flex',
          alignItems: 'center',
          ml: 'auto',
        }}
      >
        <IconBtn
          onClick={() => setViewType(VIEW_TYPE.LIST)}
          className={clsx({
            active: viewType === VIEW_TYPE.LIST,
          })}
        >
          <ListIcon />
        </IconBtn>
        <IconBtn
          onClick={() => setViewType(VIEW_TYPE.GRID)}
          className={clsx({
            active: viewType === VIEW_TYPE.GRID,
          })}
        >
          <AppsIcon />
        </IconBtn>
        <Hidden smDown>
          {list?.length > 0 ? (
            <Box
              component="span"
              sx={{
                ml: { sm: 'auto' },
              }}
            >
              <AppsPagination
                rowsPerPage={10}
                count={totalProducts}
                page={page}
                onPageChange={onPageChange}
              />
            </Box>
          ) : null}
        </Hidden>
      </Stack>
    </Box>
  );
};

export default ProductHeader;

ProductHeader.propTypes = {
  viewType: PropTypes.string,
  onSearch: PropTypes.func,
  list: PropTypes.array,
  page: PropTypes.number,
  totalProducts: PropTypes.number,
  onPageChange: PropTypes.func,
  setViewType: PropTypes.func,
};
