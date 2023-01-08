import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ContactHeader from './ContactHeader';
import AppConfirmDialog from '@crema/components/AppConfirmDialog';
import IntlMessages from '@crema/helpers/IntlMessages';
import CreateContact from '../CreateContact';
import { Hidden } from '@mui/material';
import ContactView from './ContactView';
import ContactDetail from '../ContactDetail';
import AppsPagination from '@crema/components/AppsPagination';
import AppsHeader from '@crema/components/AppsHeader';
import AppsContent from '@crema/components/AppsContent';
import AppsFooter from '@crema/components/AppsFooter';
import { useDispatch, useSelector } from 'react-redux';
import {
  onDeleteContacts,
  onGetContactList,
  onUpdateStarredStatus,
} from '../../../../redux/actions';

const ContactListing = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const contactList = useSelector(({ contactApp }) => contactApp.contactList);

  const totalContacts = useSelector(
    ({ contactApp }) => contactApp.totalContacts,
  );

  const [filterText, onSetFilterText] = useState('');

  const [page, setPage] = useState(0);

  const [pageView, setPageView] = useState('list');

  const [isDeleteDialogOpen, setDeleteDialogOpen] = useState(false);

  const [checkedContacts, setCheckedContacts] = useState([]);

  const [toDeleteContacts, setToDeleteContacts] = useState([]);

  const [isAddContact, onSetIsAddContact] = useState(false);

  const [isShowDetail, onShowDetail] = useState(false);

  const [selectedContact, setSelectedContact] = useState(null);

  const loading = useSelector(({ common }) => common.loading);

  useEffect(() => {
    setPage(0);
  }, [pathname]);

  useEffect(() => {
    const path = pathname.split('/');
    dispatch(
      onGetContactList(path[path.length - 2], path[path.length - 1], page),
    );
  }, [pathname, pageView, page, dispatch]);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  const onViewContactDetail = (contact) => {
    setSelectedContact(contact);
    onShowDetail(true);
  };

  const onOpenEditContact = (contact) => {
    setSelectedContact(contact);
    handleAddContactOpen();
  };

  const onPageChange = (event, value) => {
    setPage(value);
  };

  const onChangePageView = (view) => {
    setPageView(view);
  };

  const onChangeCheckedContacts = (event, id) => {
    if (event.target.checked) {
      setCheckedContacts(checkedContacts.concat(id));
    } else {
      setCheckedContacts(
        checkedContacts.filter((contactId) => contactId !== id),
      );
    }
  };

  const onChangeStarred = (status, contact) => {
    const selectedIdList = [contact.id];
    const path = pathname.split('/');
    dispatch(
      onUpdateStarredStatus(selectedIdList, status, path[path.length - 1]),
    );
  };

  const onUpdateContact = (contact) => {
    setSelectedContact(contact);
    handleAddContactClose();
  };

  const onGetFilteredItems = () => {
    if (filterText === '') {
      return contactList;
    } else {
      return contactList.filter((contact) =>
        contact.name.toUpperCase().includes(filterText.toUpperCase()),
      );
    }
  };

  const onDeleteSelectedContacts = () => {
    const path = pathname.split('/');
    dispatch(
      onDeleteContacts(
        path[path.length - 2],
        path[path.length - 1],
        toDeleteContacts,
        page,
      ),
    );
    setDeleteDialogOpen(false);
    setCheckedContacts([]);
  };

  const onSelectContactsForDelete = (contactIds) => {
    setToDeleteContacts(contactIds);
    setDeleteDialogOpen(true);
  };

  const list = onGetFilteredItems();

  return (
    <>
      <AppsHeader>
        <ContactHeader
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
          filterText={filterText}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onSetFilterText={onSetFilterText}
          onPageChange={onPageChange}
          page={page}
          onChangePageView={onChangePageView}
          pageView={pageView}
        />
      </AppsHeader>
      <AppsContent>
        <ContactView
          list={list}
          loading={loading}
          pageView={pageView}
          handleAddContactOpen={handleAddContactOpen}
          onChangeCheckedContacts={onChangeCheckedContacts}
          onChangeStarred={onChangeStarred}
          checkedContacts={checkedContacts}
          onSelectContactsForDelete={onSelectContactsForDelete}
          onViewContactDetail={onViewContactDetail}
          onOpenEditContact={onOpenEditContact}
        />
      </AppsContent>

      <Hidden smUp>
        {contactList.length > 0 ? (
          <AppsFooter>
            <AppsPagination
              count={totalContacts}
              page={page}
              onPageChange={onPageChange}
            />
          </AppsFooter>
        ) : null}
      </Hidden>

      <CreateContact
        isAddContact={isAddContact}
        handleAddContactClose={handleAddContactClose}
        selectContact={selectedContact}
        onUpdateContact={onUpdateContact}
      />

      <ContactDetail
        selectedContact={selectedContact}
        isShowDetail={isShowDetail}
        onShowDetail={onShowDetail}
        onSelectContactsForDelete={onSelectContactsForDelete}
        onOpenEditContact={onOpenEditContact}
      />

      <AppConfirmDialog
        open={isDeleteDialogOpen}
        onDeny={setDeleteDialogOpen}
        onConfirm={onDeleteSelectedContacts}
        title={<IntlMessages id='contactApp.deleteContact' />}
        dialogTitle={<IntlMessages id='common.deleteItem' />}
      />
    </>
  );
};

export default ContactListing;
