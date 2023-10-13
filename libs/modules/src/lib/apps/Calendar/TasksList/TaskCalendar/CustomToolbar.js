import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarViewMonthOutlinedIcon from '@mui/icons-material/CalendarViewMonthOutlined';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PropTypes from 'prop-types';
import { alpha, Box, Button, IconButton, Stack } from '@mui/material';
import AppTooltip from '@crema/components/AppTooltip';
import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { Fonts } from '@crema/constants/AppEnums';
import AppSearchBar from '@crema/components/AppSearchBar';
import { useIntl } from 'react-intl';

const IconBtn = styled(IconButton)(({ theme }) => {
  return {
    color: theme.palette.text.disabled,
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
    padding: 8,
    '&:hover, &:focus': {
      color: theme.palette.primary.main,
    },
    '&.active': {
      color: theme.palette.primary.main,
    },
  };
});

const CustomToolbar = (props) => {
  const [viewState, setViewState] = useState('month');
  const { messages } = useIntl();

  function addMonths(date, months) {
    const d = date.getDate();
    date.setMonth(date.getMonth() + months);
    if (date.getDate() !== d) {
      date.setDate(0);
    }
    console.log(date);
    return date;
  }

  function addWeeks(date, weeks) {
    date.setDate(date.getDate() + 7 * weeks);
    return date;
  }

  function addDays(date, days) {
    date.setDate(date.getDate() + days);
    console.log(date);
    return date;
  }

  /*
  const goToDayView = () => {
    props.onView('day');
    setViewState('day');
  };*/

  const goToAgenda = () => {
    props.onView('agenda');
    setViewState('agenda');
  }; /*
  const goToWeekView = () => {
    props.onView('week');
    setViewState('week');
  };*/
  const goToMonthView = () => {
    props.onView('month');
    setViewState('month');
  };

  const goToBack = () => {
    if (viewState === 'month') {
      props.onNavigate('prev', addMonths(props.date, -1));
    } else if (viewState === 'week') {
      props.onNavigate('prev', addWeeks(props.date, -1));
    } else {
      props.onNavigate('prev', addDays(props.date, -1));
    }
  };

  const goToNext = () => {
    if (viewState === 'month') {
      props.onNavigate('next', addMonths(props.date, +1));
    } else if (viewState === 'week') {
      props.onNavigate('next', addWeeks(props.date, +1));
    } else {
      props.onNavigate('next', addDays(props.date, +1));
    }
  };

  const goToToday = () => {
    const now = new Date();
    props.date.setMonth(now.getMonth());
    props.date.setYear(now.getFullYear());
    props.date.setDate(now.getDate());
    props.onNavigate('current');
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          mb: 2,
        }}
      >
        <Stack spacing={2} direction='row' sx={{ alignItems: 'center' }}>
          <IconBtn
            className={clsx({
              active: viewState === 'month',
            })}
          >
            <AppTooltip title='Month'>
              <CalendarViewMonthOutlinedIcon onClick={goToMonthView} />
            </AppTooltip>
          </IconBtn>
          <IconBtn
            className={clsx({
              active: viewState === 'agenda',
            })}
          >
            <AppTooltip title='Agenda'>
              <ViewAgendaOutlinedIcon onClick={goToAgenda} />
            </AppTooltip>
          </IconBtn>
          <Box sx={{ mr: 3 }}>
            <AppSearchBar
              iconPosition='right'
              overlap={false}
              onChange={(event) => props.onSetFilterText(event.target.value)}
              placeholder={messages['common.searchHere']}
            />
          </Box>
        </Stack>

        <Box sx={{ fontWeight: Fonts.SEMI_BOLD }}>
          {dayjs(props.date).format('DD/MM/YYYY')}
        </Box>

        <Stack spacing={2} direction='row' sx={{ alignItems: 'center' }}>
          <IconButton>
            <AppTooltip title='Next'>
              <ArrowBackIosNewIcon onClick={goToBack} />
            </AppTooltip>
          </IconButton>
          <Button
            sx={{ maxHeight: 36 }}
            size='small'
            color='primary'
            variant='contained'
            onClick={goToToday}
          >
            today
          </Button>
          <IconButton>
            <AppTooltip title='Next'>
              <ArrowForwardIosIcon onClick={goToNext} />
            </AppTooltip>
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default CustomToolbar;
CustomToolbar.propTypes = {
  onView: PropTypes.func,
  onNavigate: PropTypes.func,
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onSetFilterText: PropTypes.func,
};
