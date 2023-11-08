import React, {useEffect, useState} from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import {Fonts} from '@crema/constants/AppEnums';
import {Box} from '@mui/material';
import BlogSidebar from './Sidebar';
import ProductContent from './Content';
import {Form, Formik} from 'formik';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {postDataApi, putDataApi} from '@crema/hooks/APIHooks';
import {useNavigate} from 'react-router-dom';
import {getStringFromHtml} from '@crema/helpers/StringHelper';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

export const AddEditProduct = ({selectedProd}) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const infoViewActionsContext = useInfoViewActionsContext();
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = React.useState([
    {id: 1, title: '', desc: ''},
  ]);
  const [productSpec, setProductSpec] = React.useState([
    {id: 1, title: '', desc: ''},
  ]);

  useEffect(() => {
    if (selectedProd) {
      setSelectedTags(selectedProd?.tag || []);
      setUploadedFiles(
        selectedProd?.image.map((img) => ({...img, preview: img.src})),
      );
      setProductInfo(selectedProd?.productInfo);
      setProductSpec(selectedProd?.productSpec);
    }
  }, [selectedProd]);

  return (
    <>
      <Box
        component='h2'
        variant='h2'
        sx={{
          fontSize: 16,
          color: 'text.primary',
          fontWeight: Fonts.SEMI_BOLD,
          mb: {
            xs: 2,
            lg: 4,
          },
        }}
      >
        {selectedProd ? 'Edit Product' : 'Create a new product'}
      </Box>

      <Formik
        validateOnChange={true}
        initialValues={
          selectedProd
            ? {
                ...selectedProd,
                category: selectedProd?.category || 1,
              }
            : {
                title: '',
                SKU: '',
                category: 1,
                mrp: 0,
                salemrp: 0,
                discount: 0,
                inStock: false,
              }
        }
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true);
          if (selectedProd) {
            const updatedProd = {
              ...selectedProd,
              ...data,
            };
            putDataApi('/api/ecommerce/list/update', infoViewActionsContext, {
              product: updatedProd,
            })
              .then(() => {
                navigate('/ecommerce/product-listing');
                infoViewActionsContext.showMessage(
                  'Product updated successfully!',
                );
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          } else {
            postDataApi('/api/ecommerce/list/add', infoViewActionsContext, {
              product: {
                ...data,
                description: getStringFromHtml(data.description),
                image: uploadedFiles.map((file, index) => ({
                  id: index,
                  src: file.preview,
                  rating: 0,
                  reviews: 0,
                })),
                createdAt: dayjs().format('DD MMM YYYY'),
                inStock: data?.inStock || false,
                tag: selectedTags,
                productInfo,
                productSpec,
              },
            })
              .then(() => {
                infoViewActionsContext.showMessage(
                  'Product created successfully!',
                );
                navigate('/ecommerce/product-listing');
              })
              .catch((error) => {
                infoViewActionsContext.fetchError(error.message);
              });
          }
          setSubmitting(false);
          resetForm();
        }}
      >
        {({setFieldValue}) => (
          <Form noValidate autoComplete='off'>
            <AppGridContainer>
              <ProductContent
                content={selectedProd?.description || ''}
                uploadedFiles={uploadedFiles}
                setUploadedFiles={setUploadedFiles}
                setFieldValue={setFieldValue}
              />
              <BlogSidebar
                isEdit={!!selectedProd}
                inStock={selectedProd?.inStock}
                selectedTags={selectedTags}
                productInfo={productInfo}
                productSpec={productSpec}
                setProductInfo={setProductInfo}
                setFieldValue={setFieldValue}
                setSelectedTags={setSelectedTags}
                setProductSpec={setProductSpec}
              />
            </AppGridContainer>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddEditProduct;

AddEditProduct.propTypes = {
  selectedProd: PropTypes.object,
};
