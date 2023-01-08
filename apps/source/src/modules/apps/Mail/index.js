import React from 'react';
import MailsList from './MailsList';
import MailDetail from './MailDetail';
import PropTypes from 'prop-types';
import AppsContainer from '@crema/components/AppsContainer';
import MailSidebar from './MailSideBar';
import { useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { MailDetailViewWrapper } from './index.styled';
import MailContextProvider from '../context/MailContextProvider';

const Mail = () => {
  const { id } = useParams();
  const { messages } = useIntl();

  return (
    <MailContextProvider>
      <AppsContainer
        title={messages['mailApp.mail']}
        sidebarContent={<MailSidebar />}
      >
        <MailsList />
        <MailDetailViewWrapper
          className={clsx({
            show: id,
          })}
        >
          <MailDetail />
        </MailDetailViewWrapper>
      </AppsContainer>
    </MailContextProvider>
  );
};

export default Mail;

Mail.defaultProps = {};

Mail.propTypes = {
  match: PropTypes.object,
};
