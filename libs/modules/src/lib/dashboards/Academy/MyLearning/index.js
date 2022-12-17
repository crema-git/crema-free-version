import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import LearningItem from './LearningItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const MyLearning = ({learningData}) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['academy.myLearning']} contentStyle={{px: 0}}>
      <AppList
        animation='transition.slideRightBigIn'
        data={learningData}
        renderRow={(data, index) => <LearningItem key={index} course={data} />}
      />
    </AppCard>
  );
};

export default MyLearning;

MyLearning.propTypes = {
  learningData: PropTypes.array,
};
