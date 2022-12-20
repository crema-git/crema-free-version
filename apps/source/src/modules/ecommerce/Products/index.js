import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';

import { ProductsSidebar, VIEW_TYPE } from '@crema/modules/ecommerce/Products';
import ProductListing from './ProductListing';

const Products = () => {
  const { messages } = useIntl();
  const [filterData, setFilterData] = useState({
    title: '',
    brand: [],
    ideaFor: [],
    discount: [],
    color: [],
    rating: [],
  });
  const [viewType, setViewType] = useState(VIEW_TYPE.GRID);

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
