import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGetDataApi } from '@crema/hooks/APIHooks';
import { useLocation, useParams } from 'react-router-dom';

const MailContext = createContext();
const MailActionsContext = createContext();

export const useMail = () => useContext(MailContext);

export const useMailActions = () => useContext(MailActionsContext);

export const MailAuthProvider = ({ children }) => {
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
    { setQueryParams, setData: setMailData },
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

  const updateMailList = (type, name, page) => {
    setQueryParams({
      type,
      name,
      page,
    });
  };

  return (
    <MailContext.Provider
      value={{
        labelList,
        connectionList,
        folderList,
        mailList,
        loading,
      }}
    >
      <MailActionsContext.Provider
        value={{
          updateMailList,
          setMailData,
        }}
      >
        {children}
      </MailActionsContext.Provider>
    </MailContext.Provider>
  );
};
export default MailAuthProvider;

MailAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
