import React from 'react';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import PropTypes from 'prop-types';

import { alpha, styled } from '@mui/material/styles';
import { Fonts } from '@crema/constants/AppEnums';
import AppNavLink from '@crema/components/AppNavLink';

const ContactSidebarListItemWrapper = styled(ListItem)(({ theme }) => {
  return {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: '0 30px 30px 0',
    marginBottom: 1,
    marginTop: 1,
    [theme.breakpoints.up('md')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 24,
      paddingRight: 24,
    },

    '& .MuiSvgIcon-root': {
      marginRight: 14,
      fontSize: 20,
    },

    '&:hover,&:focus,&.active': {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      color: theme.palette.primary.main,
    },

    '&.active': {
      color: theme.palette.primary.main,
      '& $listItemText': {
        '& .MuiTypography-body1': {
          fontWeight: Fonts.SEMI_BOLD,
        },
      },
    },
  };
});

const LabelItem = ({ label }) => {
  return (
    <ContactSidebarListItemWrapper
      button
      to={`/apps/contact/label/${label.alias}`}
      component={AppNavLink}
      activeClassName="active"
    >
      <LabelOutlinedIcon style={{ color: `${label.color}` }} />
      <ListItemText
        sx={{
          '& .MuiTypography-body1': {
            fontSize: 14,
          },
        }}
        primary={label.name}
      />
    </ContactSidebarListItemWrapper>
  );
};

export default LabelItem;

LabelItem.propTypes = {
  label: PropTypes.object.isRequired,
};
