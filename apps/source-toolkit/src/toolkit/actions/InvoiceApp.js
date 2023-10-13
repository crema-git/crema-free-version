import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  GET_INVOICE_LIST,
  GET_INVOICE_DETAIL,
  GET_INVOICE_FOLDER_LIST,
  GET_INVOICE_SETTINGS,
  GET_CLIENT_LIST,
  ADD_NEW_CLIENTS,
  UPDATE_CLIENTS,
  ADD_NEW_INVOICE,
  UPDATE_INVOICE_SETTINGS,
  UPDATE_INVOICE,
  GET_CLIENT_DETAIL,
} from '@crema/constants/ActionTypes';
import { appIntl } from '@crema/helpers';
import jwtAxios from '@crema/services/auth/JWT';

export const onGetInvoiceList = (params) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/invoice/list', {
        params,
      })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_INVOICE_LIST, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetInvoiceFolderList = () => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/invoice/folders/list')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_INVOICE_FOLDER_LIST, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetInvoiceSettings = () => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/invoice/settings')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_INVOICE_SETTINGS, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
export const onGetClientList = () => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/invoice/clients')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_CLIENT_LIST, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetInvoiceDetail = (id) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/invoice/detail', {
        params: {
          id,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_INVOICE_DETAIL, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
export const onGetClientDetail = (id) => {
  const { messages } = appIntl();
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/api/clients/detail', {
        params: {
          id,
        },
      })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_CLIENT_DETAIL, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onAddInvoice = (invoice) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .post('/api/invoice/list/add', { invoice })
      .then((data) => {
        if (data.status === 200) {
          dispatch({
            type: ADD_NEW_INVOICE,
            payload: data.data,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onAddClient = (client) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .post('/api/invoice/clients/add', { client })
      .then((data) => {
        if (data.status === 200) {
          dispatch({
            type: ADD_NEW_CLIENTS,
            payload: data.data,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdateInvoice = (invoice) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .put('/api/invoice/list/update', { invoice })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: UPDATE_INVOICE,
            payload: data.data,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdateClient = (client) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .put('/api/invoice/clients/update', { client })
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: UPDATE_CLIENTS,
            payload: data.data,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onUpdateSettings = (settings) => {
  const { messages } = appIntl();
  return (dispatch) => {
    jwtAxios
      .put('/api/invoice/settings/update', settings)
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({
            type: UPDATE_INVOICE_SETTINGS,
            payload: data.data,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
