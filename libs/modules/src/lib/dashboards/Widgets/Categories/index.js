import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import List from '@mui/material/List';
import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';
import AppCard from '@crema/components/AppCard';
import { useIntl } from 'react-intl';
import AppScrollbar from '@crema/components/AppScrollbar';

const getData = (data) => {
  return data;
};

const Categories = (props) => {
  const { messages } = useIntl();
  const data = getData(props.data);

  const [categoryList, handleList] = useState(data);

  const handleChange = (e, category) => {
    category.isChecked = e.target.checked;
    const list = categoryList.map((item) =>
      item.id === category.id ? category : item
    );
    handleList(list);
  };

  return (
    <AppCard
      title={messages['dashboard.categories']}
      contentStyle={{ px: 0 }}
      action={
        <CloseIcon
          sx={{
            cursor: 'pointer',
          }}
        />
      }
      sxStyle={{ height: 1 }}
    >
      <AppScrollbar sx={{ maxHeight: 218 }}>
        <List
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            paddingTop: 2,

            '& li': {
              width: '50%',
              padding: '0px 20px',
              '& .MuiListItemIcon-root': {
                minWidth: 0,
              },
            },
          }}
        >
          {categoryList.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                item={item}
                handleChange={handleChange}
              />
            );
          })}
        </List>
      </AppScrollbar>
    </AppCard>
  );
};

export default Categories;

Categories.defaultProps = {
  data: [],
};

Categories.propTypes = {
  data: PropTypes.array,
  icon: PropTypes.string,
};
