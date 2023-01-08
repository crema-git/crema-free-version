import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import Divider from '@mui/material/Divider';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppList from '@crema/components/AppList';
import AppGrid from '@crema/components/AppGrid';
import {
  BrandData,
  DiscountList,
  IdealFor,
  ProductColors,
} from '@crema/fakedb/data';

import {
  CheckedCell,
  ColorCell,
  PriceSelector,
  ProductsCategory,
  RatingCell,
} from '@crema/modules/ecommerce/Products';
import { setFilters } from '../../../../toolkit/actions';
import { useDispatch, useSelector } from 'react-redux';

const ProductSidebar = () => {
  const dispatch = useDispatch();
  const filterData = useSelector(({ ecommerce }) => ecommerce.filterData);
  const [selectedBrand, setSelectedBrand] = useState(filterData.brand);
  const [selectedFor, setSelectedFor] = useState(filterData.ideaFor);
  const [selectedDiscount, setSelectedDiscount] = useState(filterData.discount);
  const [selectedColor, setSelectedColor] = useState(filterData.color);
  const [customerRating, setCustomerRating] = useState(filterData.rating);

  useEffect(() => {
    dispatch(
      setFilters({
        title: filterData.title,
        brand: selectedBrand,
        ideaFor: selectedFor,
        discount: selectedDiscount,
        color: selectedColor,
        rating: customerRating,
      }),
    );
  }, [
    dispatch,
    filterData.title,
    selectedBrand,
    selectedFor,
    selectedDiscount,
    selectedColor,
    customerRating,
  ]);

  const onSelectBrand = (brandId) => {
    if (selectedBrand.some((brand) => brand === brandId)) {
      setSelectedBrand(selectedBrand.filter((brand) => brand !== brandId));
    } else {
      setSelectedBrand(selectedBrand.concat(brandId));
    }
  };

  const onSelectFor = (id) => {
    if (selectedFor.some((item) => item === id)) {
      setSelectedFor(selectedFor.filter((item) => item !== id));
    } else {
      setSelectedFor(selectedFor.concat(id));
    }
  };

  const onSelectDiscount = (id) => {
    if (selectedDiscount.some((item) => item === id)) {
      setSelectedDiscount(selectedDiscount.filter((item) => item !== id));
    } else {
      setSelectedDiscount(selectedDiscount.concat(id));
    }
  };

  const onSelectColor = (id) => {
    if (selectedColor.some((item) => item === id)) {
      setSelectedColor(selectedColor.filter((item) => item !== id));
    } else {
      setSelectedColor(selectedColor.concat(id));
    }
  };

  const onSelectRating = (id) => {
    if (customerRating.some((item) => item === id)) {
      setCustomerRating(customerRating.filter((item) => item !== id));
    } else {
      setCustomerRating(customerRating.concat(id));
    }
  };

  return (
    <AppScrollbar>
      <Box
        sx={{
          p: 6,
        }}
      >
        <Box
          component='h5'
          sx={{
            mb: 2,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          Filter By
        </Box>
        <Box
          sx={{
            color: 'text.secondary',
            mb: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          CATEGORIES
        </Box>
        <ProductsCategory />
        <Divider
          sx={{
            mt: 4,
          }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            my: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          PRICE
        </Box>
        <PriceSelector />
        <Divider
          sx={{
            mt: 4,
          }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            my: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          BRAND
          <AppList
            data={BrandData}
            renderRow={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                onChange={onSelectBrand}
                selected={selectedBrand}
              />
            )}
          />
        </Box>
        <Divider
          sx={{
            mt: 4,
          }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            my: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          IDEAL FOR
          <AppList
            data={IdealFor}
            renderRow={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                onChange={onSelectFor}
                selected={selectedFor}
              />
            )}
          />
        </Box>
        <Divider
          sx={{
            mt: 4,
          }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            my: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          DISCOUNT
          <AppList
            data={DiscountList}
            renderRow={(data) => (
              <CheckedCell
                key={data.id}
                data={data}
                onChange={onSelectDiscount}
                selected={selectedDiscount}
              />
            )}
          />
        </Box>
        <Divider
          sx={{
            mt: 4,
          }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            my: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          <Box sx={{ mb: 3 }}>COLOR</Box>

          <AppGrid
            data={Object.values(ProductColors)}
            column={6}
            itemPadding={10}
            renderRow={(data, index) => (
              <ColorCell
                key={'color-' + index}
                data={data}
                selected={selectedColor}
                onChange={onSelectColor}
              />
            )}
          />
        </Box>
        <Divider
          sx={{
            mt: 4,
          }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            my: 4,
            fontWeight: Fonts.MEDIUM,
          }}
        >
          CUSTOMER RATINGS
          <AppList
            data={[5, 4, 3, 2, 1]}
            renderRow={(data) => (
              <RatingCell
                key={data}
                data={data}
                onChange={onSelectRating}
                selected={customerRating}
              />
            )}
          />
        </Box>
      </Box>
    </AppScrollbar>
  );
};

export default ProductSidebar;
