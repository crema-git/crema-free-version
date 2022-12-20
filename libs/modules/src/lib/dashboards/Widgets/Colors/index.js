import React, { useState } from 'react';
import ColorItem from './ColorItem';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';

const getData = (data) => {
  return data;
};

const Colors = (props) => {
  const data = getData(props.data);

  const [colorsList, handleList] = useState(data);

  const handleChange = (e, color) => {
    color.isChecked = e.target.checked;
    const list = colorsList.map((item) =>
      item.id === color.id ? color : item
    );
    handleList(list);
  };
  const { messages } = useIntl();
  return (
    <AppCard
      sxStyle={{ height: 1 }}
      title={messages['dashboard.colors']}
      contentStyle={{ px: 0 }}
    >
      <AppScrollbar
        sx={{
          height: { xs: 362, xl: 316 },
        }}
      >
        <AppList
          data={data}
          renderRow={(item) => {
            return (
              <ColorItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          }}
        />
      </AppScrollbar>
    </AppCard>
  );
};

export default Colors;

Colors.defaultProps = {
  data: [],
};

Colors.propTypes = {
  data: PropTypes.array,
};
