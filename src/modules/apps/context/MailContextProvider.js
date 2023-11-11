import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation, useParams } from 'react-router-dom';

const MailContext = createContext();
const MailActionsContext = createContext();

export const useMailContext = () => useContext(MailContext);

export const useMailActionsContext = () => useContext(MailActionsContext);

export const MailContextProvider = ({ children }) => {
  const params = useParams();
  const { pathname } = useLocation();
  const [{ apiData: labelList }] = useGetDataApi('/api/mailApp/labels/list');
  const [{ apiData: connectionList }] = useGetDataApi(
    '/api/mailApp/connection/list',
  );
  const [{ apiData: folderList }] = useGetDataApi('/api/mailApp/folders/list');
  const [page, setPage] = useState(0);

  const [
    { apiData: mailList, loading },
    { setQueryParams, setData: setMailData, reCallAPI },
  ] = useGetDataApi(
    '/api/mailApp/folder/mail/List',
    undefined,
    {
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page: page,
    },
    false,
  );

  useEffect(() => {
    setPage(0);
  }, [pathname]);
  useEffect(() => {
    setQueryParams({
      type: params?.folder ? 'folder' : 'label',
      name: params?.folder || params?.label,
      page,
    });
  }, [page, pathname]);

  const onPageChange = (event, value) => {
    setPage(value);
  };

  return (
    <MailContext.Provider
      value={{
        labelList,
        connectionList,
        folderList,
        mailList,
        loading,
        page,
      }}
    >
      <MailActionsContext.Provider
        value={{
          setMailData,
          onPageChange,
          reCallAPI,
        }}
      >
        {children}
      </MailActionsContext.Provider>
    </MailContext.Provider>
  );
};
export default MailContextProvider;

MailContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
