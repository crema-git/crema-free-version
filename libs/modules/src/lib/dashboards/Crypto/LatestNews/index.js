import React from 'react';
import NewsList from './NewsList';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';

const LatestNews = (props) => {
  const { newsData } = props;

  const { messages } = useIntl();

  return (
    <AppCard
      sxStyle={{ height: 1 }}
      contentStyle={{ px: 0 }}
      title={messages['dashboard.latestNews']}
      action={messages['common.viewAll']}
    >
      <NewsList newsData={newsData} />
    </AppCard>
  );
};

export default LatestNews;

LatestNews.defaultProps = {
  newsData: [],
};

LatestNews.propTypes = {
  newsData: PropTypes.array,
};
