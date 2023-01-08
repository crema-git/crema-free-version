import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import MailContentHeader from './MailContentHeader';
import { Hidden } from '@mui/material';
import AppsPagination from '@crema/components/AppsPagination';
import AppsContent from '@crema/components/AppsContent';
import AppsHeader from '@crema/components/AppsHeader';
import AppsFooter from '@crema/components/AppsFooter';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import EmailListSkeleton from '@crema/components/EmailListSkeleton';
import MailListItem from './MailListItem';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { putDataApi } from '@crema/hooks/APIHooks';
import { MailListItemMobile } from '@crema/modules/apps/Mail';
import {
  useMailActionsContext,
  useMailContext,
} from '../../context/MailContextProvider';

const MailsList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { page, mailList, loading } = useMailContext();
  const { onPageChange, setMailData } = useMailActionsContext();
  const { pathname } = useLocation();
  const path = pathname.split('/');

  const [checkedMails, setCheckedMails] = useState([]);

  const [filterText, onSetFilterText] = useState('');

  const onChangeCheckedMails = (checked, id) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onNavigatePage = (mail) => {
    if (params?.folder) navigate(`/apps/mail/${params?.folder}/${mail.id}`);
    if (params?.label) navigate(`/apps/mail/label/${params?.label}/${mail.id}`);
  };

  const onViewMailDetail = (mail) => {
    if (mail.isRead) {
      onNavigatePage(mail);
    } else {
      mail.isRead = true;
      putDataApi('/api/mailApp/mail/', infoViewActionsContext, { mail })
        .then((data) => {
          onNavigatePage(mail);
          onUpdateItem(data);
          infoViewActionsContext.showMessage(
            mail.isRead
              ? 'Mail Marked as Read Successfully'
              : 'Mail Marked as Unread Successfully',
          );
        })
        .catch((error) => {
          infoViewActionsContext.fetchError(error.message);
        });
    }
  };

  const onChangeStarred = (checked, mail) => {
    putDataApi('/api/mailApp/update/starred', infoViewActionsContext, {
      mailIds: [mail.id],
      status: checked,
    })
      .then((data) => {
        onUpdateItem(data[0]);
        infoViewActionsContext.showMessage(
          checked
            ? 'Mail Marked as Starred Successfully'
            : 'Mail Marked as Unstarred Successfully',
        );
      })
      .catch((error) => {
        infoViewActionsContext.fetchError(error.message);
      });
  };

  const onUpdateItem = (data) => {
    setMailData({
      data: mailList.data.map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      }),
      count: mailList.count,
    });
  };

  const onGetFilteredMails = () => {
    if (filterText === '') {
      return mailList?.data;
    } else {
      return mailList?.data.filter(
        (mail) =>
          mail?.subject?.toLowerCase()?.includes(filterText.toLowerCase()) ||
          mail?.detail?.toLowerCase()?.includes(filterText.toLowerCase()),
      );
    }
  };

  const onRemoveItem = (data) => {
    setMailData({
      data: mailList?.data.filter((item) => item.id !== data.id),
      count: mailList?.count - 1,
    });
  };

  const list = onGetFilteredMails();
  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          path={path}
          mailList={list}
          totalMails={mailList?.count}
        />
      </AppsHeader>
      <AppsContent>
        <Hidden smDown>
          <AppList
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
            data={list}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderRow={(mail) => (
              <MailListItem
                key={mail.id}
                mail={mail}
                onChangeCheckedMails={onChangeCheckedMails}
                checkedMails={checkedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
              />
            )}
          />
        </Hidden>
        <Hidden smUp>
          <AppList
            sx={{
              paddingTop: 0,
              paddingBottom: 0,
            }}
            data={list}
            ListEmptyComponent={
              <ListEmptyResult
                loading={loading}
                placeholder={<EmailListSkeleton />}
              />
            }
            renderRow={(mail) => (
              <MailListItemMobile
                key={mail.id}
                mail={mail}
                checkedMails={checkedMails}
                onChangeCheckedMails={onChangeCheckedMails}
                onViewMailDetail={onViewMailDetail}
                onChangeStarred={onChangeStarred}
              />
            )}
          />
        </Hidden>
      </AppsContent>
      <Hidden smUp>
        {list?.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={mailList?.count}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>
    </>
  );
};

export default MailsList;
