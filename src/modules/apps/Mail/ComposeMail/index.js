import React, {useState} from 'react';
import {Form, Formik} from 'formik';
import * as yup from 'yup';
import dayjs from 'dayjs';
import Chip from '@mui/material/Chip';
import IntlMessages from '@crema/helpers/IntlMessages';
import {useIntl} from 'react-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {useAuthUser} from '@crema/hooks/AuthHooks';
import AppTextField from '@crema/components/AppFormComponents/AppTextField';
import AppDialog from '@crema/components/AppDialog';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {blue} from '@mui/material/colors';
import {Fonts} from '@crema/constants/AppEnums';

import {styled} from '@mui/material/styles';
import AppInfoView from '@crema/components/AppInfoView';
import {postDataApi} from '@crema/hooks/APIHooks';
import {useInfoViewActionsContext} from '@crema/context/AppContextProvider/InfoViewContextProvider';
import {generateRandomUniqueNumber} from '@crema/helpers/Common';

const ReactQuillWrapper = styled(ReactQuill)(() => {
  return {
    '& .ql-toolbar': {
      borderRadius: '8px 8px 0 0',
    },
    '& .ql-container': {
      borderRadius: '0 0 8px 8px',
      minHeight: 150,
      maxHeight: 200,
    },
  };
});

const CcBccFieldWrapper = styled('div')(() => {
  return {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    '& .ccBccTextField .MuiOutlinedInput-adornedStart': {
      paddingRight: 78,
    },
    '& .ccBccView': {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: 18,
      top: 35,
    },
  };
});

export const isValidEmail = (value) => {
  return value && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
};

const validationSchema = yup.object({
  to: yup
    .string()
    .email(<IntlMessages id='validation.emailFormat' />)
    .required(<IntlMessages id='validation.emailRequired' />),
  cc: yup.string().email(<IntlMessages id='validation.emailFormat' />),
  bcc: yup.string().email(<IntlMessages id='validation.emailFormat' />),
});

const ComposeMail = (props) => {
  const {isComposeMail, onCloseComposeMail} = props;
  const infoViewActionsContext = useInfoViewActionsContext();
  const [isShowBcc, onShowBcc] = useState(false);

  const [isShowCC, onShowCC] = useState(false);

  const [isShowChip, onShowChip] = useState(false);

  const handleBlur = (to) => {
    if (to !== '') {
      onShowChip(true);
    }
  };

  const {user} = useAuthUser();

  const {messages} = useIntl();

  return (
    <AppDialog
      sxStyle={{
        '& .MuiDialog-paperWidthSm': {
          maxWidth: 600,
          minHeight: 520,
          width: '100%',
        },
        '& .MuiTypography-h6': {
          fontWeight: Fonts.LIGHT,
        },
      }}
      dividers
      open={isComposeMail}
      onClose={() => onCloseComposeMail(false)}
      title={<IntlMessages id='mailApp.compose' />}
    >
      <Formik
        initialValues={{
          to: '',
          cc: '',
          bcc: '',
          subject: '',
          content: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          const mail = {
            id: generateRandomUniqueNumber(),
            isChecked: false,
            isStarred: false,
            label: {
              id: 212,
              name: 'Personal',
              alias: 'personal',
              color: blue[500],
            },

            hasAttachments: false,
            isRead: true,
            folderValue: 122,
            sentOn: dayjs().format('llll'),
            messages: [
              {
                messageId: 1,
                sender: {
                  id: user.id,
                  name: user.displayName ? user.displayName : user.username,
                  email: user.email,
                  profilePic: user.photoURL ? user.photoURL : '',
                },
                to: [
                  {
                    name: data.to ? data.to : user.username,
                    email: data.to,
                    profilePic: '',
                  },
                ],
                cc: [],
                bcc: [],
                description: data.content ? data.content : 'No Message',
                isStarred: false,
                sentOn: 'Mon, Oct 14, 2021 8:30 PM',
              },
            ],
            subject: data.subject !== '' ? data.subject : 'No Subject',
          };
          console.log('Success:', mail);
          postDataApi('/api/mailApp/compose', infoViewActionsContext, {mail})
            .then(() => {
              infoViewActionsContext.showMessage('Mail Sent Successfully');
              onCloseComposeMail(false);
              resetForm();
              setSubmitting(false);
            })
            .catch((error) => {
              onCloseComposeMail(false);
              infoViewActionsContext.fetchError(error.message);
            });
        }}
      >
        {({isSubmitting, values, setFieldValue}) => (
          <Form
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
            noValidate
            autoComplete='off'
          >
            <Box
              sx={{
                flex: 1,
              }}
            >
              <CcBccFieldWrapper>
                {!isShowChip ? (
                  <AppTextField
                    className='ccBccTextField'
                    fullWidth
                    label={messages['common.to']}
                    variant='outlined'
                    margin='normal'
                    name='to'
                    onBlur={() => handleBlur(values.to)}
                  />
                ) : (
                  <Chip
                    label={values.to}
                    color={isValidEmail(values.to) ? '' : 'secondary'}
                    onDelete={() => onShowChip(false)}
                    variant='outlined'
                  />
                )}

                <div className='ccBccView'>
                  <Box
                    component='span'
                    sx={{
                      ml: 4,
                      cursor: 'pointer',
                    }}
                    onClick={() => onShowCC(!isShowCC)}
                  >
                    <IntlMessages id='common.cc' />
                  </Box>

                  <Box
                    component='span'
                    sx={{
                      ml: 4,
                      cursor: 'pointer',
                    }}
                    onClick={() => onShowBcc(!isShowBcc)}
                  >
                    <IntlMessages id='common.bcc' />
                  </Box>
                </div>
              </CcBccFieldWrapper>

              {isShowCC ? (
                <Box
                  sx={{
                    width: 1,
                  }}
                >
                  <AppTextField
                    variant='outlined'
                    label={messages['common.cc']}
                    placeholder={messages['common.cc']}
                    fullWidth
                    margin='normal'
                    name='cc'
                  />
                </Box>
              ) : null}

              {isShowBcc ? (
                <Box
                  sx={{
                    width: 1,
                  }}
                >
                  <AppTextField
                    variant='outlined'
                    label={messages['common.bcc']}
                    placeholder={messages['common.bcc']}
                    fullWidth
                    margin='normal'
                    name='bcc'
                  />
                </Box>
              ) : null}
              <Box
                sx={{
                  mb: 3,
                }}
              >
                <AppTextField
                  variant='outlined'
                  placeholder={messages['common.subject']}
                  label={messages['common.subject']}
                  fullWidth
                  margin='normal'
                  name='subject'
                />
              </Box>

              <Box
                sx={{
                  mb: 3,
                }}
              >
                <ReactQuillWrapper
                  theme='snow'
                  placeholder={messages['common.writeContent']}
                  onChange={(value) => setFieldValue('content', value)}
                />
              </Box>
            </Box>

            <Box
              sx={{
                pt: 3,
                textAlign: 'right',
              }}
            >
              <Button
                sx={{
                  position: 'relative',
                  minWidth: 100,
                }}
                variant='outlined'
                color='primary'
                type='submit'
                disabled={isSubmitting}
              >
                <IntlMessages id='common.send' />
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      <AppInfoView />
    </AppDialog>
  );
};

export default ComposeMail;

ComposeMail.defaultProps = {
  connection: null,
};

ComposeMail.propTypes = {
  isComposeMail: PropTypes.bool.isRequired,
  onCloseComposeMail: PropTypes.func.isRequired,
};
