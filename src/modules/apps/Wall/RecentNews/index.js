import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import NewsItem from './NewsItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const RecentNews = ({recentNews}) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['wall.recentNews']} contentStyle={{px: 0, pt: 2}}>
      <AppList
        data={recentNews}
        renderRow={(item, index) => <NewsItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default RecentNews;

RecentNews.propTypes = {
  recentNews: PropTypes.array,
};
