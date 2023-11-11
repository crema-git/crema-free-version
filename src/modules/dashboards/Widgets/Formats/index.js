import React from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';

const getData = (data) => {
  return data;
};

const Formats = (props) => {
  const data = getData(props.data);
  const { messages } = useIntl();

  return (
    <AppCard sxStyle={{ height: 1 }} title={messages['dashboard.formats']}>
      <RadioGroup
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginLeft: '-25px',
          marginRight: '-15px',
        }}
      >
        {data.map((item) => {
          return (
            <FormControlLabel
              key={item.id}
              value={item.name}
              control={<Radio />}
              label={item.name}
              sx={{
                width: '50%',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '15px',
                paddingRight: '15px',
                mx: 0,
                mb: 0.5,
                '& .MuiTypography-body1': {
                  fontSize: 14,
                  fontFamily: `${Fonts.MEDIUM} !important`,
                  color: '#A8A8A8',
                  ml: 2.5,
                  mb: 1.5,
                },
              }}
            />
          );
        })}
      </RadioGroup>
    </AppCard>
  );
};

export default Formats;

Formats.defaultProps = {
  data: [],
};

Formats.propTypes = {
  data: PropTypes.array,
};
