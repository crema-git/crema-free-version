import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';

import { ProductsSidebar, VIEW_TYPE } from '@crema/modules/ecommerce/Products';
import ProductListing from './ProductListing';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../redux/actions';

const Products = () => {
  const { messages } = useIntl();
  const filterData = useSelector(({ ecommerce }) => ecommerce.filterData);
  const [viewType, setViewType] = useState(VIEW_TYPE.GRID);
  const dispatch = useDispatch();
  const setFilterData = (data) => {
    dispatch(setFilters(data));
  };
  return (
    <AppsContainer
      title={messages['sidebar.ecommerce.products']}
      sidebarContent={
        <ProductsSidebar
          filterData={filterData}
          setFilterData={setFilterData}
        />
      }
    >
      <ProductListing
        filterData={filterData}
        viewType={viewType}
        setViewType={setViewType}
        setFilterData={setFilterData}
      />
    </AppsContainer>
  );
};

export default Products;
