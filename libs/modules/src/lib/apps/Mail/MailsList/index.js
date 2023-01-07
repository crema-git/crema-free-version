import React, { useEffect, useState } from 'react';
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
import MailListItemMobile from './MailListItemMobile';
import MailListItem from './MailListItem';
import { useInfoViewActionsContext } from '@crema/context/InfoViewContextProvider';
import { putDataApi, useGetDataApi } from '@crema/hooks/APIHooks';

const MailsList = () => {
  const navigate = useNavigate();
  const params = useParams();
  const infoViewActionsContext = useInfoViewActionsContext();
  const { pathname } = useLocation();
  const path = pathname.split('/');
  const [page, setPage] = useState(0);

  const [{ apiData, loading }, { setQueryParams, setData }] = useGetDataApi(
    '/api/mailApp/folder/mail/List',
    undefined,
    {
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    },
    false,
  );

  const [{ apiData: labelList }] = useGetDataApi('/api/mailApp/labels/list');
  const [checkedMails, setCheckedMails] = useState([]);

  const [filterText, onSetFilterText] = useState('');

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    setQueryParams({
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    });
  }, [page, pathname]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangeCheckedMails = (checked, id) => {
    if (checked) {
      setCheckedMails(checkedMails.concat(id));
    } else {
      setCheckedMails(checkedMails.filter((mailId) => mailId !== id));
    }
  };

  const onViewMailDetail = (mail) => {
    console.log('params: ', params);
    if (mail.isRead) {
      navigate(
        `/apps/mail/${
          params.folder ? params.folder : `label/${params.label}`
        }/${mail.id}`,
      );
    } else {
      mail.isRead = true;
      putDataApi('/api/mailApp/mail/', infoViewActionsContext, { mail })
        .then((data) => {
          onUpdateItem(data);
          navigate(
            `/apps/mail/${
              params.folder ? params.folder : `label/${params.label}`
            }/${mail.id}`,
          );
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
    setData({
      data: apiData.data.map((item) => {
        if (item.id === data.id) {
          return data;
        }
        return item;
      }),
      count: apiData.count,
    });
  };

  const onGetFilteredMails = () => {
    if (filterText === '') {
      return apiData?.data;
    } else {
      return apiData?.data.filter(
        (mail) =>
          mail?.subject?.toLowerCase()?.includes(filterText.toLowerCase()) ||
          mail?.detail?.toLowerCase()?.includes(filterText.toLowerCase()),
      );
    }
  };

  const onRemoveItem = (data) => {
    setData({
      data: apiData?.data.filter((item) => item.id !== data.id),
      count: apiData?.count - 1,
    });
  };

  const list = onGetFilteredMails();
  return (
    <>
      <AppsHeader>
        <MailContentHeader
          checkedMails={checkedMails}
          setCheckedMails={setCheckedMails}
          onPageChange={onPageChange}
          filterText={filterText}
          onSetFilterText={onSetFilterText}
          page={page}
          path={path}
          setData={setData}
          mailList={list}
          totalMails={apiData?.count}
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
                labelList={labelList}
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
                labelList={labelList}
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
              count={apiData?.count}
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
