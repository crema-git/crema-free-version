import React from 'react';
import TicketSupportTable from './TicketSupportTable';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';

const TicketSupport = ({ ticketSupportData = [] }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      contentStyle={{ px: 0 }}
      title={messages['dashboard.latestTicketSupport']}
      action={messages['common.viewAll']}
    >
      <TicketSupportTable ticketSupportData={ticketSupportData} />
    </AppCard>
  );
};

export default TicketSupport;

TicketSupport.propTypes = {
  ticketSupportData: PropTypes.array,
};
