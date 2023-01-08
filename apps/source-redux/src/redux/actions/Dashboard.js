import React from 'react';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_ACADEMY_DATA,
  GET_ANALYTICS_DATA,
  GET_CRM_DATA,
  GET_CRYPTO_DATA,
  GET_ECOMMERCE_DATA,
  GET_HC_DATA,
  GET_METRICS_DATA,
  GET_WIDGETS_DATA,
} from '@crema/constants/ActionTypes';
import IntlMessages from '@crema/helpers/IntlMessages';
import jwtAxios from '@crema/services/auth/JWT';

export const onGetAnalyticsData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/analytics')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_ANALYTICS_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetECommerceData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/ecommerce')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_ECOMMERCE_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetAcademyData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/academy')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_ACADEMY_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetHCData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/health_care')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_HC_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
export const onGetCryptoData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/crypto')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_CRYPTO_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetCrmData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/crm')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_CRM_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetMetricsData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/metrics')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_METRICS_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};

export const onGetWidgetsData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    jwtAxios
      .get('/dashboard/widgets')
      .then((data) => {
        if (data.status === 200) {
          dispatch({ type: FETCH_SUCCESS });
          dispatch({ type: GET_WIDGETS_DATA, payload: data.data });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id="message.somethingWentWrong" />,
          });
        }
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};
