import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductsCategory from './ProductsCategory';
import { Box } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import Divider from '@mui/material/Divider';
import PriceSelector from './PriceSelector';
import AppScrollbar from '@crema/components/AppScrollbar';
import AppList from '@crema/components/AppList';
import CheckedCell from './CheckedCell';
import AppGrid from '@crema/components/AppGrid';
import ColorCell from './ColorCell';
import RatingCell from './RatingCell';
import {
  brandData,
  discountList,
  idealFor,
  ProductColors,
} from '@crema/fakedb/data';

const ProductSidebar = ({ filterData, setFilterData }) => {
  const [selectedBrand, setSelectedBrand] = useState(filterData.brand);
  const [selectedFor, setSelectedFor] = useState(filterData.ideaFor);
  const [selectedDiscount, setSelectedDiscount] = useState(filterData.discount);
  const [selectedColor, setSelectedColor] = useState(filterData.color);
  const [customerRating, setCustomerRating] = useState(filterData.rating);

  useEffect(() => {
    setFilterData({
      title: filterData.title,
      brand: selectedBrand,
      ideaFor: selectedFor,
      discount: selectedDiscount,
      color: selectedColor,
      rating: customerRating,
    });
  }, [
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
            data={brandData}
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
            data={idealFor}
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
            data={discountList}
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
ProductSidebar.propTypes = {
  filterData: PropTypes.object.isRequired,
  setFilterData: PropTypes.func.isRequired,
};
