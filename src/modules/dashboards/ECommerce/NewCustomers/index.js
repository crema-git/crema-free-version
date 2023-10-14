import React from 'react';
import AppCard from '@crema/components/AppCard';
import {useIntl} from 'react-intl';
import CustomerItem from './CustomerItem';
import AppList from '@crema/components/AppList';
import AppScrollbar from '@crema/components/AppScrollbar';
import PropTypes from 'prop-types';

const NewCustomers = (props) => {
  const {messages} = useIntl();
  return (
    <AppCard title={messages['eCommerce.newCustomers']} contentStyle={{px: 0}}>
      <AppScrollbar sx={{maxHeight: 300}}>
        <AppList
          data={props.newCustomers}
          renderRow={(item) => (
            <CustomerItem listStyle='paddingX' key={item.id} item={item} />
          )}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default NewCustomers;

NewCustomers.propTypes = {
  newCustomers: PropTypes.array,
};
