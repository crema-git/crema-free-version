import React from 'react';
import PropTypes from 'prop-types';
import {IntlProvider} from 'react-intl';
import {IntlGlobalProvider} from "@crema/helpers";
import AppLocale from "@crema/services/localization";
import {useLocaleContext} from "../AppContextProvider/LocaleContextProvider";

const AppLocaleProvider = (props) => {
  const {locale} = useLocaleContext();
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <IntlGlobalProvider>{props.children}</IntlGlobalProvider>
    </IntlProvider>
  );
};

export default AppLocaleProvider;

AppLocaleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
