import React from 'react';
import ContactListing from './ContactListing';
import {useIntl} from 'react-intl';
import AppsContainer from '@crema/components/AppsContainer';
import SideBarContent from './ContactSideBar';
import {useGetDataApi} from '@crema/utility/APIHooks';

const Contact = () => {
  const [{apiData, loading}, {setQueryParams, setData, reCallAPI}] =
    useGetDataApi('/api/contactApp/contact/List', {}, {}, false);

  const {messages} = useIntl();
  return (
    <AppsContainer
      title={messages['contactApp.contact']}
      sidebarContent={<SideBarContent reCallAPI={reCallAPI} />}
    >
      <ContactListing
        apiData={apiData}
        loading={loading}
        setQueryParams={setQueryParams}
        setData={setData}
        reCallAPI={reCallAPI}
      />
    </AppsContainer>
  );
};

export default Contact;
