import Box from '@mui/material/Box';
import React from 'react';
import PropTypes from 'prop-types';
import AppList from '@crema/components/AppList';
import AppGrid from '@crema/components/AppGrid';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import IntlMessages from '@crema/helpers/IntlMessages';
import ContactListSkeleton from '@crema/components/ContactListSkeleton';
import { Hidden } from '@mui/material';
import {
  ContactGridItem,
  ContactListItem,
  ContactListItemMobile,
} from '@crema/modules/apps/Contact';
import { useContactContext } from '../../../context/ContactContextProvider';

const ContactView = (props) => {
  const {
    list,
    handleAddContactOpen,
    onChangeStarred,
    onChangeCheckedContacts,
    checkedContacts,
    onSelectContactsForDelete,
    onOpenEditContact,
    onViewContactDetail,
  } = props;

  const { pageView, loading, labelList } = useContactContext();

  return (
    <>
      {pageView === 'list' ? (
        <>
          <Hidden smDown>
            <AppList
              data={list}
              animation='transition.slideUpIn'
              sx={{
                pt: 0,
                pb: 0,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id='contactApp.createContact' />}
                  onClick={handleAddContactOpen}
                  placeholder={<ContactListSkeleton />}
                />
              }
              renderRow={(contact) => (
                <ContactListItem
                  key={contact.id}
                  contact={contact}
                  labelList={labelList}
                  onChangeCheckedContacts={onChangeCheckedContacts}
                  checkedContacts={checkedContacts}
                  onSelectContactsForDelete={onSelectContactsForDelete}
                  onChangeStarred={onChangeStarred}
                  onViewContactDetail={onViewContactDetail}
                  onOpenEditContact={onOpenEditContact}
                />
              )}
            />
          </Hidden>

          <Hidden smUp>
            <AppList
              data={list}
              animation='transition.slideUpIn'
              sx={{
                pt: 0,
                pb: 0,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={loading}
                  actionTitle={<IntlMessages id='contactApp.createContact' />}
                  onClick={handleAddContactOpen}
                  placeholder={<ContactListSkeleton />}
                />
              }
              renderRow={(contact) => (
                <ContactListItemMobile
                  key={contact.id}
                  contact={contact}
                  checkedContacts={checkedContacts}
                  labelList={labelList}
                  onChangeStarred={onChangeStarred}
                  onViewContactDetail={onViewContactDetail}
                  onOpenEditContact={onOpenEditContact}
                />
              )}
            />
          </Hidden>
        </>
      ) : (
        <Box
          sx={{
            px: 5,
            pt: 0.5,
            pb: 3,
          }}
        >
          <AppGrid
            responsive={{
              xs: 1,
              sm: 2,
              md: 3,
              lg: 2,
              xl: 3,
            }}
            data={list}
            renderRow={(contact) => (
              <ContactGridItem
                key={contact.id}
                contact={contact}
                labelList={labelList}
                onChangeCheckedContacts={onChangeCheckedContacts}
                checkedContacts={checkedContacts}
                onChangeStarred={onChangeStarred}
                onSelectContactsForDelete={onSelectContactsForDelete}
                onViewContactDetail={onViewContactDetail}
                onOpenEditContact={onOpenEditContact}
              />
            )}
          />
        </Box>
      )}
    </>
  );
};

export default ContactView;

ContactView.defaultProps = {
  list: [],
  pageView: 'list',
  checkedContacts: [],
};

ContactView.propTypes = {
  list: PropTypes.array,
  pageView: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  handleAddContactOpen: PropTypes.func,
  checkedContacts: PropTypes.array,
  onChangeCheckedContacts: PropTypes.func,
  onChangeStarred: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  onOpenEditContact: PropTypes.func,
  onViewContactDetail: PropTypes.func,
};
