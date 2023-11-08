import React, {useState} from 'react';
import BlogCommentForm from './BlogCommentForm';
import BlogCommentList from './BlogCommentList';
import PropTypes from 'prop-types';
import {Box, Typography} from '@mui/material';
import {Formik} from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import AppCard from '@crema/components/AppCard';
import IntlMessages from '@crema/helpers/IntlMessages';
import {Fonts} from '@crema/constants/AppEnums';
import {useAuthUser} from '@crema/hooks/AuthHooks';
import {generateRandomUniqueNumber} from '@crema/helpers/Common';

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  comment: yup.string().required(<IntlMessages id='validation.comment' />),
});

const BlogComment = ({comment}) => {
  const user = useAuthUser();

  const [comments, setComments] = useState(comment);

  const onCommentSend = (data) => {
    const item = {
      id: generateRandomUniqueNumber(),
      name: data.name,
      image: user.photoURL,
      duration: dayjs().format('ll'),
      comment: data.comment,
    };
    const newList = comments.concat(item);
    setComments(newList);
    console.log('newList', newList);
  };

  return (
    <AppCard>
      <BlogCommentList comments={comments} />
      <Box sx={{position: 'relative'}}>
        <Typography
          component='h3'
          sx={{
            mb: 7.5,
            fontSize: {xs: 18, md: 20},
            fontWeight: Fonts.BOLD,
          }}
        >
          <IntlMessages id='extraPages.writeComments' />
        </Typography>
        <Formik
          validateOnChange={false}
          validateOnBlur={true}
          initialValues={{
            name: '',
            email: '',
            comment: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(data, {resetForm}) => {
            onCommentSend(data);
            resetForm();
          }}
        >
          <BlogCommentForm />
        </Formik>
      </Box>
    </AppCard>
  );
};

export default BlogComment;

BlogComment.propTypes = {
  comment: PropTypes.array,
};
