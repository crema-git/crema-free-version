import React, { useEffect, useState } from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import { Fonts } from '@crema/constants/AppEnums';
import { Box } from '@mui/material';
import BlogSidebar from './Sidebar';
import ProductContent from './Content';
import { Formik, Form } from 'formik';
import { getFormattedDate, getStringFromHtml } from '@crema/helpers';
import { onCreateProduct, onUpdateProduct } from '../../../../redux/actions';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const AddEditProduct = ({ selectedProd }) => {
  const dispatch = useDispatch();
  const [selectedTags, setSelectedTags] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const navigate = useNavigate();
  const [productInfo, setProductInfo] = React.useState([
    { id: 1, title: '', desc: '' },
  ]);
  const [productSpec, setProductSpec] = React.useState([
    { id: 1, title: '', desc: '' },
  ]);

  useEffect(() => {
    if (selectedProd) {
      setSelectedTags(selectedProd?.tag || []);
      setUploadedFiles(selectedProd?.image);
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
        initialValues={{
          ...selectedProd,
          category: selectedProd?.category || 1,
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          if (selectedProd) {
            const updatedProd = {
              ...selectedProd,
              ...data,
            };
            dispatch(onUpdateProduct(updatedProd));
            navigate('/ecommerce/product-listing');
          } else {
            const product = {
              ...data,
              description: getStringFromHtml(data.description),
              image: uploadedFiles.map((file, index) => ({
                id: index,
                src: file.preview,
                rating: 0,
                reviews: 0,
              })),
              tag: selectedTags,
              createdAt: getFormattedDate(),
              productInfo,
              productSpec,
            };

            dispatch(onCreateProduct(product));
            navigate('/ecommerce/product-listing');
          }
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting, values, setFieldValue }) => (
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
