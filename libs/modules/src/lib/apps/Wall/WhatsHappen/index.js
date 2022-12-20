import React from 'react';
import AppCard from '@crema/components/AppCard';
import PropTypes from 'prop-types';
import WhatsHappenItem from './WhatsHappenItem';
import { useIntl } from 'react-intl';

const WhatsHappen = ({ whatsHappen }) => {
  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ mb: 8 }}
      title={messages['wall.whatsHappening']}
      action={messages['common.viewAll']}
      contentStyle={{ px: 0, pt: 2 }}
    >
      <div>
        {whatsHappen.map((data) => (
          <WhatsHappenItem data={data} key={data.id} />
        ))}
      </div>
    </AppCard>
  );
};

export default WhatsHappen;

WhatsHappen.propTypes = {
  whatsHappen: PropTypes.array,
};
