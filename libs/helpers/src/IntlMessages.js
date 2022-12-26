import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { allowMultiLanguage } from '@crema/constants/AppConst';

const InjectMassage = (props) => {
  if (allowMultiLanguage) {
    return <FormattedMessage {...props} />;
  } else {
    return props.id.split('.').pop();
  }
};
export default injectIntl(InjectMassage, {
  forwardRef: false,
});
