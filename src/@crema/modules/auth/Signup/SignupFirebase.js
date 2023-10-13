import React from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import IntlMessages from '@crema/helpers/IntlMessages';
import {useAuthMethod} from '@crema/hooks/AuthHooks';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppInfoView from '@crema/components/AppInfoView';
import {Fonts} from '@crema/constants/AppEnums';
import {Link} from 'react-router-dom';
import {AiOutlineGoogle, AiOutlineTwitter} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';
import AuthWrapper from '../AuthWrapper';

const validationSchema = yup.object({
  name: yup.string().required(<IntlMessages id='validation.nameRequired' />),
  email: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  password: yup
    .string()
    .required(<IntlMessages id='validation.passwordRequired' />),
});

const SignupFirebase = () => {
  const {registerUserWithEmailAndPassword, logInWithPopup} = useAuthMethod();

  return (
    <AuthWrapper>
      <Box sx={{flex: 1, display: 'flex', flexDirection: 'column'}}>
        <Box sx={{flex: 1, display: 'flex', flexDirection: 'column', mb: 5}}>
          <Formik
            validateOnChange={true}
            initialValues={{
              name: '',
              email: '',
              password: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(data, {setSubmitting}) => {
              setSubmitting(true);
              console.log('data', data);
              registerUserWithEmailAndPassword(data);
              console.log(
                'registerUserWithEmailAndPassword',
                registerUserWithEmailAndPassword,
              );
              setSubmitting(false);
            }}
          >
            {({isSubmitting}) => (
              <Form style={{textAlign: 'left'}} noValidate autoComplete='off'>
                <Box sx={{mb: {xs: 4, xl: 5}}}>
                  <AppTextField
                    label={<IntlMessages id='common.name' />}
                    name='name'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box sx={{mb: {xs: 4, xl: 5}}}>
                  <AppTextField
                    label={<IntlMessages id='common.email' />}
                    name='email'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box sx={{mb: {xs: 4, xl: 5}}}>
                  <AppTextField
                    label={<IntlMessages id='common.password' />}
                    name='password'
                    type='password'
                    variant='outlined'
                    sx={{
                      width: '100%',
                      '& .MuiInputBase-input': {
                        fontSize: 14,
                      },
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    mb: {xs: 3, xl: 4},
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox
                      sx={{
                        ml: -3,
                      }}
                    />
                    <Box
                      component='span'
                      sx={{
                        mr: 2,
                        color: 'grey.500',
                      }}
                    >
                      <IntlMessages id='common.iAgreeTo' />
                    </Box>
                  </Box>
                  <Box
                    component='span'
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      cursor: 'pointer',
                    }}
                  >
                    <IntlMessages id='common.termConditions' />
                  </Box>
                </Box>

                <div>
                  <Button
                    variant='contained'
                    color='primary'
                    disabled={isSubmitting}
                    sx={{
                      minWidth: 160,
                      fontWeight: Fonts.REGULAR,
                      fontSize: 16,
                      textTransform: 'capitalize',
                      padding: '4px 16px 8px',
                    }}
                    type='submit'
                  >
                    <IntlMessages id='common.signup' />
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </Box>

        <Box
          sx={{
            color: 'grey.500',
            mb: {xs: 5, md: 7},
          }}
        >
          <span style={{marginRight: 4}}>
            <IntlMessages id='common.alreadyHaveAccount' />
          </span>
          <Box
            component='span'
            sx={{
              fontWeight: Fonts.MEDIUM,
              '& a': {
                color: (theme) => theme.palette.primary.main,
                textDecoration: 'none',
              },
            }}
          >
            <Link to='/signIn'>
              <IntlMessages id='common.signIn' />
            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: (theme) => theme.palette.background.default,
            mx: {xs: -5, lg: -10},
            mb: {xs: -6, lg: -11},
            mt: 'auto',
            py: 2,
            px: {xs: 5, lg: 10},
          }}
        >
          <Box
            sx={{
              color: (theme) => theme.palette.text.secondary,
            }}
          >
            <IntlMessages id='common.orLoginWith' />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              sx={{p: 2, '& svg': {fontSize: 18}}}
              onClick={() => logInWithPopup('google')}
            >
              <AiOutlineGoogle />
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': {fontSize: 18},
              }}
              onClick={() => logInWithPopup('facebook')}
            >
              <FaFacebookF />
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': {fontSize: 18},
              }}
              onClick={() => logInWithPopup('github')}
            >
              <BsGithub />
            </IconButton>
            <IconButton
              sx={{
                p: 1.5,
                '& svg': {fontSize: 18},
              }}
              onClick={() => logInWithPopup('twitter')}
            >
              <AiOutlineTwitter />
            </IconButton>
          </Box>
        </Box>

        <AppInfoView />
      </Box>
    </AuthWrapper>
  );
};

export default SignupFirebase;
