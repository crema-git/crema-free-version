import React, { createRef, useEffect } from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import { useParams } from 'react-router-dom';
import AppsContent from '@crema/components/AppsContent';
import AppsHeader from '@crema/components/AppsHeader';
import AppAnimate from '@crema/components/AppAnimate';
import { MailDetailSkeleton } from '@crema/components/MailDetailSkeleton';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import {
  onGetSelectedMail,
  onNullifyMail,
  onUpdateMailReadStatus,
} from '../../../../redux/actions';

const MailDetail = () => {
  const dispatch = useDispatch();
  const contentRef = createRef();

  const { id } = useParams();
  const selectedMail = useSelector(({ mailApp }) => mailApp.selectedMail);

  useEffect(() => {
    dispatch(onGetSelectedMail(id));
    return () => {
      onNullifyMail();
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedMail && !selectedMail.isRead) {
      dispatch(onUpdateMailReadStatus([selectedMail.id], true));
    }
  }, [dispatch, selectedMail]);

  if (!selectedMail) {
    return <MailDetailSkeleton />;
  }

  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      ref={contentRef}
    >
      <AppsHeader>
        <MailDetailHeader selectedMail={selectedMail} />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody selectedMail={selectedMail} />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
