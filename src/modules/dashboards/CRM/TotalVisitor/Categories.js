import React from 'react';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';

const EarningCategoryListItem = styled(ListItem)((props) => {
  return {
    paddingRight: 32,
    paddingLeft: 8,
    paddingBottom: 8,
    '& .earning-text': {
      color: props.theme.palette.text.secondary,
      margin: 0,
      width: 'calc(100% - 20px)',
      '& > *': {
        display: 'block',
        fontSize: '14px !important',
        fontWeight: 500,
      },
      '& > .MuiTypography-root': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
      },
    },
    '& .dot-icon': {
      backgroundColor: props.category.color,
      width: 10,
      height: 10,
      borderRadius: '50%',
      marginRight: 8,
    },
    '& .MuiListItemSecondaryAction-root': {
      right: 0,
      fontWeight: Fonts.BOLD,
    },
  };
});

const Categories = (props) => {
  const { category } = props;

  return (
    <EarningCategoryListItem
      category={category}
      secondaryAction={<span>{category.value}% </span>}
    >
      <span className='dot-icon' />
      <ListItemText className='earning-text' primary={`${category.name}:`} />
    </EarningCategoryListItem>
  );
};

export default Categories;

Categories.propTypes = {
  category: PropTypes.object.isRequired,
};
