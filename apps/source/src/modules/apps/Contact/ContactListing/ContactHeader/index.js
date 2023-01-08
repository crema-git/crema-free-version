import React from 'react';
import Box from '@mui/material/Box';
import AppSearchBar from '@crema/components/AppSearchBar';
import { Hidden } from '@mui/material';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import AppsPagination from '@crema/components/AppsPagination';
import { ViewSelectButtons } from '@crema/modules/apps/Contact';
import {
  useContactActionsContext,
  useContactContext,
} from '../../../context/ContactContextProvider';

const ContactHeader = (props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    onUpdateContacts,
    onSelectContactsForDelete,
  } = props;
  const { page, pageView, contactList } = useContactContext();
  const { onPageChange, setPageView } = useContactActionsContext();

  const { messages } = useIntl();

  return (
    <>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <CheckBox
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        <AppSearchBar
          iconPosition='right'
          overlap={false}
          value={filterText}
          onChange={(event) => onSetFilterText(event.target.value)}
          placeholder={messages['common.searchHere']}
        />
        {checkedContacts.length > 0 ? (
          <ContactCheckedActions
            onSelectContactsForDelete={onSelectContactsForDelete}
            checkedContacts={checkedContacts}
            setCheckedContacts={setCheckedContacts}
            onUpdateContacts={onUpdateContacts}
          />
        ) : null}

        <ViewSelectButtons pageView={pageView} onChangePageView={setPageView} />
      </Box>
      <Hidden smDown>
        {contactList?.data?.length > 0 ? (
          <AppsPagination
            sx={{ ml: 2 }}
            count={contactList?.count}
            page={page}
            onPageChange={onPageChange}
          />
        ) : null}
      </Hidden>
    </>
  );
};

export default ContactHeader;

ContactHeader.defaultProps = {
  checkedContacts: [],
  filterText: '',
  page: 0,
};

ContactHeader.propTypes = {
  checkedContacts: PropTypes.array,
  setCheckedContacts: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  apiData: PropTypes.object,
  onUpdateContacts: PropTypes.func,
  onSelectContactsForDelete: PropTypes.func,
  page: PropTypes.number,
  onPageChange: PropTypes.func,
  pageView: PropTypes.string.isRequired,
  onChangePageView: PropTypes.func,
};
