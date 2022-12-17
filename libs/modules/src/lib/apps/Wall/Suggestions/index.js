import React from 'react';
import AppList from '@crema/components/AppList';
import AppCard from '@crema/components/AppCard';
import SuggestionItem from './SuggestionItem';
import {useIntl} from 'react-intl';
import PropTypes from 'prop-types';

const Suggestions = ({suggestions}) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['wall.suggestions']} contentStyle={{px: 0, pt: 2}}>
      <AppList
        data={suggestions}
        renderRow={(item, index) => <SuggestionItem key={index} item={item} />}
      />
    </AppCard>
  );
};

export default Suggestions;

Suggestions.propTypes = {
  suggestions: PropTypes.array,
};
