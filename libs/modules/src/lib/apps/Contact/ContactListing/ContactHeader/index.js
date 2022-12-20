import React from 'react';
import Box from '@mui/material/Box';
import AppSearchBar from '@crema/components/AppSearchBar';
import { Hidden } from '@mui/material';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import CheckBox from './CheckBox';
import ContactCheckedActions from './ContactCheckedActions';
import ViewSelectButtons from './ViewSelectButtons';
import AppsPagination from '@crema/components/AppsPagination';

const ContactHeader = (props) => {
  const {
    checkedContacts,
    setCheckedContacts,
    filterText,
    onSetFilterText,
    apiData,
    onUpdateContacts,
    onChangePageView,
    onSelectContactsForDelete,
    page,
    onPageChange,
    pageView,
  } = props;

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
          contactList={apiData?.data || []}
          checkedContacts={checkedContacts}
          setCheckedContacts={setCheckedContacts}
        />

        <AppSearchBar
          iconPosition="right"
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

        <ViewSelectButtons
          pageView={pageView}
          onChangePageView={onChangePageView}
        />
      </Box>
      <Hidden smDown>
        {apiData?.data?.length > 0 ? (
          <AppsPagination
            sx={{ ml: 2 }}
            count={apiData?.count}
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
