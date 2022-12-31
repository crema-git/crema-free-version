import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IntlMessages from '@crema/helpers/IntlMessages';
import Button from '@mui/material/Button';
import AppInfoView from '@crema/components/AppInfoView';
import { useAuthMethod } from '@crema/hooks/AuthHooks';
import ReactCodeInput from 'react-code-input';
import AuthWrapper from '../AuthWrapper';
import AppLogo from '@crema/components/AppLogo';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';

const ConfirmSignupAwsCognito = (props) => {
  const infoViewActionsContext = useInfoViewActionsContext();
  const { confirmCognitoUserSignup } = useAuthMethod();

  const navigate = useNavigate();

  const [pin, setPin] = useState('');

  const { messages } = useIntl();

  const handleSubmit = () => {
    const { email } = props.location.state || {};
    if (email && pin.length === 6) {
      confirmCognitoUserSignup(email, pin);
    } else if (!email) {
      navigate('/signup');
      infoViewActionsContext.fetchError(messages['validation.tryAgain']);
    } else {
      infoViewActionsContext.fetchError(messages['validation.pinLength']);
    }
  };

  return (
    <AuthWrapper>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            mb: 5,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <AppLogo />
        </Box>
        <Typography
          variant="h2"
          component="h2"
          sx={{
            mb: 1.5,
            color: (theme) => theme.palette.text.primary,
            fontWeight: Fonts.SEMI_BOLD,
            fontSize: { xs: 14, xl: 16 },
          }}
        >
          <IntlMessages id="common.emailVerification" />
        </Typography>
        <Box
          sx={{
            mb: { xs: 5, xl: 10 },
            fontSize: 18,
          }}
        >
          <Typography>
            <IntlMessages id="common.verificationMessage" />
          </Typography>
        </Box>

        <Box
          sx={{
            mb: { xs: 6, xl: 10 },
          }}
        >
          <ReactCodeInput
            type="password"
            value={pin}
            fields={6}
            onChange={(value) => setPin(value)}
          />
        </Box>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            fontWeight: Fonts.REGULAR,
            textTransform: 'capitalize',
            fontSize: 16,
            minWidth: 160,
          }}
          onClick={handleSubmit}
        >
          <IntlMessages id="common.submit" />
        </Button>
        <AppInfoView />
      </Box>
    </AuthWrapper>
  );
};

export default ConfirmSignupAwsCognito;

ConfirmSignupAwsCognito.propTypes = {
  location: PropTypes.object,
};
