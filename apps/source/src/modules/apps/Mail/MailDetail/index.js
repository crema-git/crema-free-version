import React, { createRef, useEffect } from 'react';
import MailDetailHeader from './MailDetailHeader';
import MailDetailBody from './MailDetailBody';
import { useParams } from 'react-router-dom';
import AppsContent from '@crema/components/AppsContent';
import AppsHeader from '@crema/components/AppsHeader';
import AppAnimate from '@crema/components/AppAnimate';
import { MailDetailSkeleton } from '@crema/components/MailDetailSkeleton';
import Box from '@mui/material/Box';
import { useGetDataApi } from '@crema/hooks/APIHooks';

const MailDetail = () => {
  const contentRef = createRef();

  const { id } = useParams();
  const [{ apiData: selectedMail }, { setQueryParams, setData }] =
    useGetDataApi('/api/mailApp/mail/', undefined, { id: id }, false);

  useEffect(() => {
    setQueryParams({ id });
  }, [id]);

  const onUpdateSelectedMail = (data) => {
    setData(data);
  };

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
        <MailDetailHeader
          selectedMail={selectedMail}
          onUpdateSelectedMail={onUpdateSelectedMail}
        />
      </AppsHeader>
      <AppsContent isDetailView>
        <AppAnimate animatoin='transition.slideUpIn'>
          <MailDetailBody
            selectedMail={selectedMail}
            key={'mail_detail'}
            onUpdateSelectedMail={onUpdateSelectedMail}
          />
        </AppAnimate>
      </AppsContent>
    </Box>
  );
};

export default MailDetail;
