import React from 'react';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import ProductCell from './ProductCell';

import AppScrollbar from '@crema/components/AppScrollbar';
import AppSelect from '@crema/components/AppSelect';
import PropTypes from 'prop-types';
import AppGrid from '@crema/components/AppGrid';

const PopularProducts = ({popularProducts}) => {
  const {messages} = useIntl();

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleSelectionType = () => {};

  return (
    <AppCard
      sxStyle={{height: 1}}
      title={messages['eCommerce.popularProducts']}
      action={
        <AppSelect
          menus={[
            messages['dashboard.thisWeek'],
            messages['dashboard.lastWeeks'],
            messages['dashboard.lastMonth'],
          ]}
          defaultValue={messages['dashboard.thisWeek']}
          onChange={handleSelectionType}
        />
      }
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
    >
      <AppScrollbar style={{maxHeight: 330}}>
        <AppGrid
          data={popularProducts}
          responsive={{
            xs: 1,
            sm: 2,
            md: 2,
            lg: 2,
            xl: 2,
          }}
          itemPadding={0}
          renderRow={(data, index) => (
            <ProductCell key={'product-' + index} data={data} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default PopularProducts;

PopularProducts.propTypes = {
  popularProducts: PropTypes.array,
};
