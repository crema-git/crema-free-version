import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import { Button, Hidden } from '@mui/material';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';
import Box from '@mui/material/Box';
import AppSearchBar from '@crema/components/AppSearchBar';
import { OrderTable } from '@crema/modules/ecommerce/Orders';
import AppLoader from '@crema/components/AppLoader';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentOrders } from '../../../redux/actions';

const Orders = () => {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const recentOrders = useSelector(({ ecommerce }) => ecommerce.recentOrders);
  const orderCount = useSelector(({ ecommerce }) => ecommerce.orderCount);
  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');

  const onPageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    dispatch(getRecentOrders(search, page));
  }, [dispatch, search, page]);

  const onSearchOrder = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  return (
    <>
      {recentOrders ? (
        <AppsContainer title={messages['eCommerce.recentOrders']} fullView>
          <AppsHeader>
            <Box
              display='flex'
              flexDirection='row'
              alignItems='center'
              width={1}
              justifyContent='space-between'
            >
              <AppSearchBar
                iconPosition='right'
                overlap={false}
                onChange={(event) => onSearchOrder(event.target.value)}
                placeholder={messages['common.searchHere']}
              />
              <Box display='flex' flexDirection='row' alignItems='center'>
                <Button variant='contained' color='primary'>
                  Add Order
                </Button>

                <Hidden smDown>
                  <AppsPagination
                    rowsPerPage={10}
                    count={orderCount}
                    page={page}
                    onPageChange={onPageChange}
                  />
                </Hidden>
              </Box>
            </Box>
          </AppsHeader>

          <AppsContent
            sx={{
              paddingTop: 2.5,
              paddingBottom: 2.5,
            }}
          >
            <OrderTable orderData={recentOrders || []} />
          </AppsContent>

          <Hidden smUp>
            <AppsPagination
              rowsPerPage={10}
              count={orderCount}
              page={page}
              onPageChange={onPageChange}
            />
          </Hidden>
        </AppsContainer>
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default Orders;
