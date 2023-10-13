import React from 'react';
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import AppTextField from '@crema/components/AppTextField';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import { productCategory } from '@crema/fakedb/ecommerceData';
import { useNavigate } from 'react-router-dom';
import AppGridContainer from '@crema/components/AppGridContainer';
import AppScrollbar from '@crema/components/AppScrollbar';
import { Field } from 'formik';
import Slide from '@mui/material/Slide';

const TagList = [
  {
    id: 1,
    name: 'Fashion',
  },
  {
    id: 2,
    name: 'Hotel',
  },
  {
    id: 3,
    name: 'Event',
  },
];
const BlogSidebar = ({
  isEdit,
  inStock,
  productInfo,
  productSpec,
  setProductSpec,
  setFieldValue,
  setProductInfo,
  selectedTags,
  setSelectedTags,
}) => {
  const inputLabel = React.useRef(null);
  const navigate = useNavigate();

  return (
    <Slide direction='left' in mountOnEnter unmountOnExit>
      <Grid item xs={12} lg={4}>
        <AppScrollbar style={{ height: '700px' }}>
          <AppCard title='Product Details'>
            <FormControlLabel
              control={
                <Switch
                  checked={inStock}
                  onChange={(event) =>
                    setFieldValue('inStock', event.target.checked)
                  }
                  name='inStock'
                />
              }
              label='In Stock'
            />

            <AppTextField
              name='SKU'
              variant='outlined'
              sx={{
                width: '100%',
                my: 4,
              }}
              placeholder='Product SKU'
            />

            <FormControl
              sx={{
                width: '100%',
              }}
              variant='outlined'
            >
              <InputLabel
                ref={inputLabel}
                id='demo-simple-select-outlined-label'
              >
                <IntlMessages id='common.category' />
              </InputLabel>
              <Field
                name='category'
                label={<IntlMessages id='common.category' />}
                labelId='label-select-outlined-label'
                as={Select}
                onChange={(event) =>
                  setFieldValue('category', event.target.value)
                }
              >
                {productCategory.map((category) => {
                  return (
                    <MenuItem
                      value={category.id}
                      key={category.id}
                      sx={{
                        cursor: 'pointer',
                        inputVariant: 'outlined',
                      }}
                    >
                      {category.name}
                    </MenuItem>
                  );
                })}
              </Field>
            </FormControl>

            <Autocomplete
              multiple
              id='tags-outlined'
              sx={{
                width: '100%',
                my: 4,
              }}
              options={TagList}
              autoHighlight
              getOptionLabel={(option) => option.name}
              value={selectedTags}
              onChange={(event, value) => setSelectedTags(value)}
              renderOption={(props, option) => (
                <Box
                  component='li'
                  sx={{ display: 'flex', alignItems: 'center' }}
                  {...props}
                >
                  <Box ml={4}>{option?.name}</Box>
                </Box>
              )}
              filterSelectedOptions
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant='outlined'
                  label='Tags'
                  fullWidth
                />
              )}
            />
          </AppCard>

          <AppCard title='Product Pricing' sxStyle={{ mt: 7 }}>
            <AppTextField
              name='mrp'
              variant='outlined'
              sx={{
                width: '100%',
                my: 2,
                '& .MuiInputBase-input': {
                  pl: 2,
                },
              }}
              InputProps={{
                startAdornment: '$',
              }}
              label='Regular Price'
            />
            <AppTextField
              name='salemrp'
              variant='outlined'
              sx={{
                width: '100%',
                my: 2,
                '& .MuiInputBase-input': {
                  pl: 2,
                },
              }}
              InputProps={{
                startAdornment: '$',
              }}
              label='Sale Price'
            />
            <FormControlLabel
              control={
                <Switch
                  value='checkedA'
                  inputProps={{ 'aria-label': 'secondary checkbox' }}
                  name='inStock'
                />
              }
              label='Tax Inclusive'
            />

            <AppTextField
              name='discount'
              variant='outlined'
              sx={{
                width: '100%',
                my: 2,
              }}
              placeholder='Discount in %'
            />
          </AppCard>

          <AppCard
            title='Product Specification'
            sxStyle={{ mt: 7 }}
            action={
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setProductSpec([
                    ...productSpec,
                    { id: productSpec.length + 1, title: '', desc: '' },
                  ]);
                }}
              >
                Add New
              </Button>
            }
          >
            <AppGridContainer spacing={4}>
              {productSpec.map((productItem, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant='outlined'
                        value={productItem.title}
                        sx={{
                          width: '100%',
                          my: 2,
                        }}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductInfo = [...productSpec];
                          newProductInfo[index].title = value;
                          setProductInfo(newProductInfo);
                        }}
                        label='Product Label'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant='outlined'
                        value={productItem.desc}
                        sx={{
                          width: '100%',
                          my: 2,
                        }}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductInfo = [...productSpec];
                          newProductInfo[index].desc = value;
                          setProductInfo(newProductInfo);
                        }}
                        label='Product Value'
                      />
                    </Grid>
                  </React.Fragment>
                );
              })}
            </AppGridContainer>
          </AppCard>

          <AppCard
            title='Product Details'
            sxStyle={{ mt: 7 }}
            action={
              <Button
                variant='contained'
                color='primary'
                onClick={() => {
                  setProductInfo([
                    ...productInfo,
                    { id: productInfo.length + 1, title: '', desc: '' },
                  ]);
                }}
              >
                Add New
              </Button>
            }
          >
            <AppGridContainer spacing={4}>
              {productInfo.map((productItem, index) => {
                return (
                  <React.Fragment key={index}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant='outlined'
                        value={productItem.title}
                        sx={{
                          width: '100%',
                          my: 2,
                        }}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductInfo = [...productInfo];
                          newProductInfo[index].title = value;
                          setProductInfo(newProductInfo);
                        }}
                        label='Product Label'
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        variant='outlined'
                        value={productItem.desc}
                        sx={{
                          width: '100%',
                          my: 2,
                        }}
                        onChange={(event) => {
                          const { value } = event.target;
                          const newProductInfo = [...productInfo];
                          newProductInfo[index].desc = value;
                          setProductInfo(newProductInfo);
                        }}
                        label='Product Value'
                      />
                    </Grid>
                  </React.Fragment>
                );
              })}
            </AppGridContainer>
          </AppCard>
        </AppScrollbar>
        <Stack
          spacing={3}
          direction='row'
          sx={{ justifyContent: 'flex-end', mt: 4 }}
        >
          <Button
            sx={{
              minWidth: 100,
              color: 'text.secondary',
            }}
            variant='text'
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>

          <Button
            sx={{
              display: 'block',
              minWidth: 100,
            }}
            color='primary'
            variant='contained'
            type='submit'
          >
            {isEdit ? 'Edit' : 'Add'} Product
          </Button>
        </Stack>
      </Grid>
    </Slide>
  );
};

export default BlogSidebar;
