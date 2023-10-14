import React from 'react';
import AppCard from '@crema/components/AppCard';
import {alpha, Icon, IconButton} from '@mui/material';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import StatGraphs from './StatGraphs';
import Box from '@mui/material/Box';
import {Fonts} from '@crema/constants/AppEnums';

const ReportCard = ({data}) => {
  return (
    <AppCard
      footer={
        <StatGraphs
          id={data.id}
          data={data.graphData}
          strokeColor={data.color}
        />
      }
    >
      <Box
        sx={{
          paddingTop: 1,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 'calc(100% - 46px)',
            paddingRight: 1.25,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{fontWeight: Fonts.SEMI_BOLD}}
              variant='h2'
              component='h2'
            >
              {data.value}
            </Typography>
            {data?.percentageChange && (
              <Box
                sx={{
                  color: (theme) => theme.palette.success.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  ml: 4,
                }}
              >
                <Box
                  component='span'
                  sx={{
                    ml: 0.25,
                    mt: '3px',
                    fontSize: 14,
                    fontWeight: Fonts.SEMI_BOLD,
                    color: data.percentageChange > 0 ? '#11C15B' : '#F04F47',
                  }}
                >
                  {data.percentageChange > 0 ? '+' : ''}
                  {data.percentageChange}%
                </Box>
              </Box>
            )}
          </Box>
          <Typography
            sx={{
              color: (theme) => theme.palette.text.secondary,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              width: '100%',
            }}
          >
            {data.type}
          </Typography>
        </Box>
        <IconButton
          style={{
            color: data.color,
            padding: 8,
            backgroundColor: alpha(data.color, 0.1),
          }}
          size='large'
        >
          <Icon style={{fontSize: 30}}>{data.icon}</Icon>
        </IconButton>
      </Box>
    </AppCard>
  );
};

export default ReportCard;

ReportCard.propTypes = {
  data: PropTypes.object,
};
