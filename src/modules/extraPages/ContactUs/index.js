import React from 'react';
import AppGridContainer from '@crema/components/AppGridContainer';
import Grid from '@mui/material/Grid';
import AppAnimate from '@crema/components/AppAnimate';
import Box from '@mui/material/Box';
import {Formik} from 'formik';
import * as yup from 'yup';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppCard from '@crema/components/AppCard';
import {
  Address,
  ContactUsForm,
  SendMessage,
  SimpleMap,
} from '@crema/modules/extraPages/ContactUs';
import {contactUsData} from '@crema/mockapi/fakedb/extraPages';

const validationSchema = yup.object({
  fullName: yup
    .string()
    .required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  message: yup.string().required(<IntlMessages id='validation.message' />),
});

const ContactUs = () => {
  return (
    <AppAnimate animation='transition.slideUpIn' delay={200}>
      <AppCard>
        <Box sx={{mb: 5, maxHeight: '40%'}}>
          <SimpleMap />
        </Box>
        <SendMessage sendMessage={contactUsData.sendMessage} />
        <AppGridContainer>
          <Grid item xs={12} md={6}>
            <Formik
              validateOnChange={false}
              validateOnBlur={true}
              initialValues={{
                fullName: '',
                email: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={(data, {setSubmitting}) => {
                setSubmitting(true);
                console.log('data: ', data);
                //TODO Api Call here to save user info
                setSubmitting(false);
              }}
            >
              <ContactUsForm />
            </Formik>
          </Grid>
          <Grid item xs={12} md={6}>
            <Address />
          </Grid>
        </AppGridContainer>
      </AppCard>
    </AppAnimate>
  );
};

export default ContactUs;
