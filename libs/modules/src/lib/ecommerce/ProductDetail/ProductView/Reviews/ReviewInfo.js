import React from 'react';
import { Box } from '@mui/material';
import AppCircularProgress from '@crema/components/AppCircularProgress';
import { Fonts } from '@crema/constants/AppEnums';
import StarRateIcon from '@mui/icons-material/StarRate';
import AppLinearProgress from '@crema/components/AppLinearProgress';

const ReviewInfo = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: { xs: 'center', md: 'flex-start' },
      }}
    >
      <Box
        component="span"
        sx={{
          mr: { xs: 0, md: 5 },
        }}
      >
        <AppCircularProgress
          minWidth={150}
          maxWidth={150}
          activeColor="#49BD65"
          value={70}
          hidePercentage
          centerNode={
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component="h3"
                sx={{
                  fontSize: 14,
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: Fonts.BOLD,
                }}
              >
                4.8 <StarRateIcon />
              </Box>
              <Box
                component="p"
                sx={{
                  ml: 2,
                  fontSize: 14,
                  fontWeight: Fonts.LIGHT,
                }}
              >
                Overall rating
              </Box>
            </Box>
          }
          thickness={2}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            p: 1,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span">5</Box>
          <StarRateIcon style={{ fontSize: 16 }} />
          <AppLinearProgress
            activeColor="#49BD65"
            value={70}
            thickness={6}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <Box
            component="span"
            sx={{
              ml: 2,
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            432
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span">4</Box>
          <StarRateIcon style={{ fontSize: 16 }} />
          <AppLinearProgress
            activeColor="#49BD65"
            value={30}
            thickness={6}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <Box
            component="span"
            sx={{
              ml: 2,
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            122
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span">3</Box>
          <StarRateIcon style={{ fontSize: 16 }} />
          <AppLinearProgress
            activeColor="#FF9F00"
            value={20}
            thickness={6}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <Box
            component="span"
            sx={{
              ml: 2,
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            20
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span">2</Box>
          <StarRateIcon style={{ fontSize: 16 }} />
          <AppLinearProgress
            activeColor="#FF9F00"
            value={30}
            thickness={6}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <Box
            component="span"
            sx={{
              ml: 2,
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            3
          </Box>
        </Box>
        <Box
          sx={{
            p: 1,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box component="span">1</Box>
          <StarRateIcon style={{ fontSize: 16 }} />
          <AppLinearProgress
            activeColor="#FF6161"
            value={40}
            thickness={6}
            style={{ minWidth: 200, maxWidth: 500 }}
          />
          <Box
            component="span"
            sx={{
              ml: 2,
              fontSize: 14,
              color: 'text.secondary',
            }}
          >
            4
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReviewInfo;
