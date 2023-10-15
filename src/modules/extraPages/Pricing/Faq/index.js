import AppGridContainer from '@crema/components/AppGridContainer';
import {Fonts} from '@crema/constants/AppEnums';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai';
import PropTypes from 'prop-types';

const PricingFaq = ({pricingFaq}) => {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <AppGridContainer spacing={8}>
      <Grid item xs={12} sm={5}>
        <Box sx={{color: 'primary.main', fontWeight: Fonts.BOLD}}>Support</Box>
        <Typography variant='h2' sx={{my: 2, fontSize: 36}}>
          FAQs
        </Typography>
        <Typography
          variant='body1'
          sx={{my: 4, color: 'text.secondary', maxWidth: 500, fontSize: 16}}
        >
          Everything you need to know about the product and billing. Can’t find
          the answer you&apos;re looking for? Please chat to our friendly team.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={7}>
        {pricingFaq.map((item) => {
          return (
            <Accordion
              key={item.id}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              sx={{
                color: 'text.secondary',
                marginBottom: 0.5,
                padding: '10px 20px',
                bgcolor: (theme) => theme.palette.background.default,
                boxShadow: 'none',
                '&:before': {
                  display: 'none',
                },
              }}
            >
              <AccordionSummary
                sx={{
                  fontWeight: Fonts.MEDIUM,
                  color: 'text.primary',
                  fontSize: 16,
                  padding: 0,
                }}
                expandIcon={
                  expanded === item.id ? (
                    <AiOutlineMinusCircle size={20} />
                  ) : (
                    <AiOutlinePlusCircle size={20} />
                  )
                }
              >
                <Box>{item.ques}</Box>
              </AccordionSummary>
              <AccordionDetails sx={{padding: '0 0 10px'}}>
                <Box>{item.ans}</Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Grid>
    </AppGridContainer>
  );
};

PricingFaq.propTypes = {
  pricingFaq: PropTypes.object,
};

export default PricingFaq;
