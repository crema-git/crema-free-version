import React from 'react';
import AppGrid from '@crema/components/AppGrid';
import GridItem from './GridItem';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import PropTypes from 'prop-types';

const ProductGrid = ({ ecommerceList, loading }) => (
  <AppGrid
    delay={200}
    responsive={{
      xs: 1,
      sm: 2,
      xl: 3,
    }}
    data={ecommerceList}
    renderRow={(item) => <GridItem item={item} key={item.id} />}
    ListEmptyComponent={
      <ListEmptyResult content="No product found" loading={loading} />
    }
  />
);
export default ProductGrid;

ProductGrid.propTypes = {
  ecommerceList: PropTypes.array,
  loading: PropTypes.bool,
};
