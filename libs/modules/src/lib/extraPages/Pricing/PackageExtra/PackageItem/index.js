import React from 'react';
import { alpha, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { Fonts } from '@crema/constants/AppEnums';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const PackageItem = ({ pricing }) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Box>
        <Typography
          component="h3"
          sx={{
            fontWeight: Fonts.MEDIUM,
            fontSize: { xs: 18, lg: 20 },
          }}
        >
          {pricing.title}
        </Typography>
        <Typography
          component="h4"
          sx={{
            fontSize: 14,
            fontWeight: Fonts.MEDIUM,
            mb: 5,
            color: (theme) => theme.palette.text.secondary,
          }}
        >
          <Box
            component="span"
            sx={{
              fontWeight: Fonts.BOLD,
              fontSize: { xs: 26, md: 28, lg: 30 },
              color: (theme) => theme.palette.text.primary,
            }}
          >
            ${pricing.price}
          </Box>
          /month
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontWeight: Fonts.BOLD,
            backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
            color: (theme) => theme.palette.primary.main,
            boxShadow: 'none',
            '&:hover, &:focus': {
              backgroundColor: (theme) =>
                alpha(theme.palette.primary.main, 0.2),
              color: (theme) => theme.palette.primary.main,
            },
          }}
        >
          Choose Plan
        </Button>
      </Box>
      <Box>
        <List
          sx={{
            py: 0,
          }}
        >
          {pricing.checkList.map((data, index) => (
            <ListItem
              key={index}
              sx={{
                p: 0,
                mb: 2.5,
              }}
            >
              <ListItemIcon sx={{ minWidth: 10, mr: 3.5 }}>
                {data.label === 'true' ? (
                  <AiOutlineCheckCircle
                    sx={{
                      fontSize: 16,
                      mt: 1,
                      color: (theme) => theme.palette.text.primary,
                    }}
                  />
                ) : (
                  <AiOutlineCloseCircle
                    sx={{
                      fontSize: 16,
                      mt: 1,
                      color: (theme) => theme.palette.text.primary,
                    }}
                  />
                )}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default PackageItem;

PackageItem.propTypes = {
  pricing: PropTypes.object,
};
