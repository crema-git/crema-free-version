import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from './ProductGrid';

import ProductList from './ProductList';
import { alpha, Box, Hidden } from '@mui/material';
import { onGetEcommerceData, setFilters } from '../../../../toolkit/actions';
import { useThemeContext } from '@crema/context/ThemeContextProvider';
import AppsHeader from '@crema/components/AppsHeader';
import ProductHeader from '../ProductHeader';
import AppsContent from '@crema/components/AppsContent';
import { VIEW_TYPE } from '@crema/modules/ecommerce/Products';
import AppsFooter from '@crema/components/AppsFooter';
import AppsPagination from '@crema/components/AppsPagination';

const ProductListing = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const [page, setPage] = useState(0);

  const ecommerceList = useSelector(({ ecommerce }) => ecommerce.ecommerceList);
  const { list = [], total = 0 } = ecommerceList;
  const viewType = useSelector(({ ecommerce }) => ecommerce.viewType);
  const filterData = useSelector(({ ecommerce }) => ecommerce.filterData);
  const loading = useSelector(({ common }) => common.loading);

  useEffect(() => {
    dispatch(onGetEcommerceData(filterData, page));
  }, [dispatch, filterData, page]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const searchProduct = (title) => {
    dispatch(setFilters({ ...filterData, title }));
  };
  return (
    <>
      <AppsHeader>
        <ProductHeader
          list={list}
          viewType={viewType}
          page={page}
          totalProducts={total}
          onPageChange={onPageChange}
          onSearch={searchProduct}
        />
      </AppsHeader>

      <AppsContent
        style={{
          backgroundColor: alpha(theme.palette.background.default, 0.6),
        }}
      >
        <Box
          sx={{
            width: '100%',
            flex: 1,
            display: 'flex',
            py: 2,
            px: 4,
            height: 1,
            '& > div': {
              width: '100%',
            },
          }}
        >
          {viewType === VIEW_TYPE.GRID ? (
            <ProductGrid ecommerceList={list} loading={loading} />
          ) : (
            <ProductList ecommerceList={list} loading={loading} />
          )}
        </Box>
      </AppsContent>
      <Hidden smUp>
        {list.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={total}
              rowsPerPage={10}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default ProductListing;
