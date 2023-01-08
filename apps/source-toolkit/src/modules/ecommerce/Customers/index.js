import React, { useEffect, useState } from 'react';
import AppsContainer from '@crema/components/AppsContainer';
import { useIntl } from 'react-intl';
import { Button, Hidden } from '@mui/material';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import AppsPagination from '@crema/components/AppsPagination';
import Box from '@mui/material/Box';
import AppInfoView from '@crema/components/AppInfoView';
import AppSearchBar from '@crema/components/AppSearchBar';
import { CustomerTable } from '@crema/modules/ecommerce/Customers';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers } from '../../../toolkit/actions';

const Customers = () => {
  const { messages } = useIntl();
  const dispatch = useDispatch();
  const customers = useSelector(({ ecommerce }) => ecommerce.customers);
  const customerCount = useSelector(({ ecommerce }) => ecommerce.customerCount);
  const [page, setPage] = useState(0);
  const [search, setSearchQuery] = useState('');

  const onPageChange = (event, value) => {
    setPage(value);
  };
  useEffect(() => {
    dispatch(getCustomers(search, page));
  }, [dispatch, search, page]);

  const onSearchCustomer = (e) => {
    setSearchQuery(e.target.value);
    setPage(0);
  };

  return (
    <>
      <AppsContainer title={messages['sidebar.ecommerce.customers']} fullView>
        <AppsHeader>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              width: 1,
            }}
          >
            <AppSearchBar
              iconPosition='right'
              overlap={false}
              onChange={(event) => onSearchCustomer(event.target.value)}
              placeholder={messages['common.searchHere']}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                ml: 'auto',
              }}
            >
              <Button variant='contained' color='primary'>
                Add Customer
              </Button>

              <Hidden smDown>
                <AppsPagination
                  rowsPerPage={10}
                  count={customerCount}
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
          <CustomerTable customers={customers} />
        </AppsContent>

        <Hidden smUp>
          <AppsPagination
            rowsPerPage={10}
            count={customerCount}
            page={page}
            onPageChange={onPageChange}
          />
        </Hidden>
      </AppsContainer>

      <AppInfoView />
    </>
  );
};

export default Customers;
