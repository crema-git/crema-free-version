import React, {useState} from 'react';
import DealsTable from './DealsTable';
import {useIntl} from 'react-intl';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import AppCard from '@crema/components/AppCard';
import {Typography} from '@mui/material';
import {Fonts} from '@crema/constants/AppEnums';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppSelect from '@crema/components/AppSelect';

const Deals = (props) => {
  const {dealsTableData} = props;
  const [tableData, setTableData] = useState(dealsTableData);

  const onDealChange = (value) => {
    if (value === messages['todo.completed']) {
      setTableData(
        dealsTableData.filter((data) => data.progress === 'Approved'),
      );
    } else if (value === messages['common.pending']) {
      setTableData(
        dealsTableData.filter((data) => data.progress === 'Pending'),
      );
    } else {
      setTableData(dealsTableData);
    }
  };

  const {messages} = useIntl();

  return (
    <AppCard
      sxStyle={{height: 1}}
      title={
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <Typography
            sx={{
              mr: {xs: 4, lg: 5},
              fontWeight: Fonts.MEDIUM,
              fontSize: 16,
            }}
            variant='h3'
            component='h3'
          >
            <IntlMessages id='dashboard.crm.deals' />
          </Typography>
        </Box>
      }
      contentStyle={{paddingLeft: 0, paddingRight: 0}}
      action={
        <AppSelect
          menus={[
            messages['common.all'],
            messages['todo.completed'],
            messages['common.pending'],
          ]}
          defaultValue={messages['common.all']}
          onChange={onDealChange}
        />
      }
    >
      <DealsTable dealsTableData={tableData} />
    </AppCard>
  );
};

export default Deals;

Deals.defaultProps = {
  dealsTableData: [],
};

Deals.propTypes = {
  dealsTableData: PropTypes.array,
};
