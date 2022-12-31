import React from 'react';
import { Form, Formik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import IntlMessages from '@crema/helpers/IntlMessages';
import { useIntl } from 'react-intl';
import Box from '@mui/material/Box';
import { red } from '@mui/material/colors';
import AppCard from '@crema/components/AppCard';
import AppTextField from '@crema/components/AppTextField';

const validationSchema = yup.object({
  email: yup
    .string()
    .email(<IntlMessages id="validation.emailFormat" />)
    .required(<IntlMessages id="validation.emailRequired" />),
});

const Subscribe = () => {
  const infoViewActionsContext = useInfoViewActionsContext();

  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{
        height: 1,
        backgroundColor: red[600],
        color: 'white',
      }}
      titleStyle={{ color: 'white' }}
      title={messages['dashboard.subscribe']}
    >
      <Box
        component="p"
        sx={{
          mb: 6,
          pr: 4,
          fontSize: 14,
        }}
      >
        <IntlMessages id="dashboard.subscribeContent" />
      </Box>
      <Formik
        validateOnChange={true}
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          infoViewActionsContext.showMessage(
            <IntlMessages id="message.thankYouSubscription" />
          );
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Box
            sx={{
              textAlign: 'left',
              mt: 8,
            }}
          >
            <Form>
              <Box
                sx={{
                  display: 'flex',
                }}
              >
                <Box
                  sx={{
                    width: '75%',
                  }}
                >
                  <AppTextField
                    placeholder={messages['common.email']}
                    name="email"
                    label={<IntlMessages id="common.emailAddress" />}
                    inputProps={{
                      'aria-label': 'naked',
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                      '& input[type="text"]': {
                        backgroundColor: 'white',
                        color: 'black',
                        fontSize: 14,
                        borderRadius: 2,
                      },
                      '& .MuiFormHelperText-root.Mui-error': {
                        color: 'white',
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 5,
                    width: 80,
                    color: 'primary.contrastText',
                  }}
                >
                  <Button
                    size="large"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    type="submit"
                    sx={{
                      width: '100%',
                      height: '51.1px',
                      padding: '5.3px 22px',
                    }}
                  >
                    <ChevronRightIcon
                      sx={{
                        fontSize: 30,
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Form>
          </Box>
        )}
      </Formik>
    </AppCard>
  );
};

export default Subscribe;
