import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import React, { useState } from 'react';
import IntlMessages from '@crema/helpers/IntlMessages';
import AppScrollbar from '@crema/components/AppScrollbar';
import CreateContact from '../CreateContact';
import LabelItem from './LabelItem';
import AppsSideBarFolderItem from '@crema/components/AppsSideBarFolderItem';
import { Fonts } from '@crema/constants/AppEnums';
import AppList from '@crema/components/AppList';
import ListEmptyResult from '@crema/components/AppList/ListEmptyResult';
import SidebarPlaceholder from '@crema/components/SidebarListSkeleton';
import AddIcon from '@mui/icons-material/Add';
import { Zoom } from '@mui/material';
import { useGetDataApi } from '@crema/hooks/APIHooks';

const SideBarContent = ({ reCallAPI }) => {
  const [{ apiData: labelList }] = useGetDataApi(
    '/api/contactApp/labels/list',
    []
  );
  const [{ apiData: folderList }] = useGetDataApi(
    '/api/contactApp/folders/list',
    []
  );

  const [isAddContact, onSetIsAddContact] = useState(false);

  const handleAddContactOpen = () => {
    onSetIsAddContact(true);
  };

  const handleAddContactClose = () => {
    onSetIsAddContact(false);
  };

  return (
    <>
      <Box
        sx={{
          px: { xs: 4, md: 5 },
          pt: { xs: 4, md: 5 },
          pb: 2.5,
        }}
      >
        <Zoom in style={{ transitionDelay: '300ms' }}>
          <Button
            variant="outlined"
            color="primary"
            sx={{
              padding: '8px 28px',
              borderRadius: 8,
              '& .MuiSvgIcon-root': {
                fontSize: 26,
              },
            }}
            startIcon={<AddIcon />}
            onClick={handleAddContactOpen}
          >
            <IntlMessages id="contactApp.createContact" />
          </Button>
        </Zoom>
      </Box>

      <AppScrollbar className="scroll-app-sidebar">
        <Box
          sx={{
            pr: 4,
            pb: { xs: 4, md: 5, lg: 6.2 },
          }}
        >
          <List
            sx={{
              mb: { xs: 2, xl: 5 },
            }}
            component="nav"
            aria-label="main task folders"
          >
            <AppList
              animation="transition.slideLeftIn"
              data={folderList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={
                    <Box
                      sx={{
                        px: { xs: 4, md: 5, lg: 6.2 },
                      }}
                    >
                      <SidebarPlaceholder />
                    </Box>
                  }
                />
              }
              renderRow={(item) => (
                <AppsSideBarFolderItem
                  key={item.id}
                  item={item}
                  path={`/apps/contact/folder/${item.alias}`}
                />
              )}
            />
          </List>

          <Box
            component="h4"
            sx={{
              mt: { xs: 4, xl: 5 },
              px: { xs: 4, md: 5, lg: 6.2 },
              fontWeight: Fonts.SEMI_BOLD,
            }}
          >
            <IntlMessages id="common.labels" />
          </Box>

          <List component="nav" aria-label="main mailbox folders">
            <AppList
              animation="transition.slideLeftIn"
              data={labelList}
              ListEmptyComponent={
                <ListEmptyResult
                  loading={true}
                  placeholder={
                    <Box
                      sx={{
                        px: { xs: 4, md: 5, lg: 6.2 },
                      }}
                    >
                      <SidebarPlaceholder />
                    </Box>
                  }
                />
              }
              renderRow={(label) => <LabelItem key={label.id} label={label} />}
            />
          </List>

          <CreateContact
            isAddContact={isAddContact}
            handleAddContactClose={handleAddContactClose}
            reCallAPI={reCallAPI}
          />
        </Box>
      </AppScrollbar>
    </>
  );
};

export default SideBarContent;

SideBarContent.propTypes = {
  reCallAPI: PropTypes.func,
};
