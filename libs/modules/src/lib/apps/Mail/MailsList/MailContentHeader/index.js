import React from 'react';
import Checkbox from '@mui/material/Checkbox/index';
import Box from '@mui/material/Box';
import { Hidden } from '@mui/material';
import PropTypes from 'prop-types';
import CheckedMailActions from './CheckedMailActions';
import MoreOptions from './MoreOptions';
import AppsPagination from '@crema/components/AppsPagination';
import AppSearchBar from '@crema/components/AppSearchBar';
import { useIntl } from 'react-intl';

const MailContentHeader = (props) => {
  const {
    path,
    checkedMails,
    setCheckedMails,
    page,
    mailList,
    totalMails,
    setData,
    onPageChange,
    filterText,
    onSetFilterText,
  } = props;

  const { messages } = useIntl();

  const onHandleMasterCheckbox = (event) => {
    if (event.target.checked) {
      const mailIds = mailList.map((mail) => mail.id);
      setCheckedMails(mailIds);
    } else {
      setCheckedMails([]);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: { xs: '100%', sm: 'auto' },
        }}
      >
        <Box component="span">
          <Checkbox
            sx={{
              color: (theme) => theme.palette.text.disabled,
            }}
            color="primary"
            indeterminate={
              checkedMails?.length > 0 &&
              checkedMails?.length < mailList?.length
            }
            checked={
              mailList?.length > 0 && checkedMails?.length === mailList?.length
            }
            onChange={onHandleMasterCheckbox}
          />
        </Box>
        <Box sx={{ mr: 5 }}>
          <AppSearchBar
            iconPosition="right"
            overlap={false}
            value={filterText}
            onChange={(event) => onSetFilterText(event.target.value)}
            placeholder={messages['common.searchHere']}
          />
        </Box>
        {checkedMails?.length > 0 ? (
          <CheckedMailActions
            checkedMails={checkedMails}
            setCheckedMails={setCheckedMails}
            setData={setData}
          />
        ) : null}

        <MoreOptions
          checkedMails={checkedMails}
          path={path}
          setCheckedMails={setCheckedMails}
          mailList={mailList || []}
          setData={setData}
        />
      </Box>
      <Hidden smDown>
        {mailList?.length > 0 ? (
          <Box
            component="span"
            sx={{
              ml: { sm: 'auto' },
            }}
          >
            <AppsPagination
              count={totalMails}
              page={page}
              onPageChange={onPageChange}
            />
          </Box>
        ) : null}
      </Hidden>
    </>
  );
};

export default MailContentHeader;

MailContentHeader.defaultProps = {
  checkedMails: [],
  page: 0,
};

MailContentHeader.propTypes = {
  checkedMails: PropTypes.array,
  setCheckedMails: PropTypes.func,
  filterText: PropTypes.string,
  onSetFilterText: PropTypes.func,
  setData: PropTypes.func,
  page: PropTypes.number,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onPageChange: PropTypes.func,
  totalMails: PropTypes.any,
  mailList: PropTypes.any,
};
