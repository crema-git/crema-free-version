import React from 'react';
import AppCard from '@crema/components/AppCard';
import AppList from '@crema/components/AppList';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { Button, Grid } from '@mui/material';
import { Fonts } from '@crema/constants/AppEnums';
import PropTypes from 'prop-types';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import AppGridContainer from '@crema/components/AppGridContainer';
import { getTotalPrice } from './helper';

const ItemsList = ({ cartItems }) => {
  return (
    <AppCard>
      <AppGridContainer>
        <Grid xs={12} sm={6} item>
          <AppList
            delay={200}
            data={cartItems}
            renderRow={(data) => (
              <Box
                key={data.id}
                sx={{
                  display: 'flex',
                  className: 'item-hover',
                  px: 4,
                  py: 3,
                }}
              >
                <Avatar sx={{ mr: 3.5 }} src={data.image} />
                <Box>
                  <Box sx={{ fontSize: 15, fontWeight: Fonts.BOLD }}>
                    {data.title} ({data.count})
                  </Box>
                  <Box sx={{ color: 'text.secondary', fontSize: 14 }}>
                    Brand: {data.brand}
                  </Box>
                </Box>
              </Box>
            )}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 4, fontSize: 16, fontWeight: Fonts.BOLD }}>
              Total ${getTotalPrice(cartItems)}
            </Box>
            <Box sx={{ pl: 2, display: 'flex', alignItems: 'center', mb: 4 }}>
              <Box sx={{ px: 2 }}>
                <Button color="secondary" variant="contained">
                  Cancel
                </Button>
              </Box>
              <Box px={2}>
                <Button color="primary" variant="contained">
                  Need Help
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                mt: 'auto',
                p: 4,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box component="span" sx={{ mr: 3, pt: 1.5 }}>
                <AirportShuttleOutlinedIcon sx={{ color: 'primary.main' }} />
              </Box>
              <Box component="span">Delivery expected by 27 Jul</Box>
            </Box>
          </Box>
        </Grid>
      </AppGridContainer>
    </AppCard>
  );
};

export default ItemsList;

ItemsList.propTypes = {
  cartItems: PropTypes.array,
};
