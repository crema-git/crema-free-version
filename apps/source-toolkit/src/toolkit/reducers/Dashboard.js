import {
  GET_ACADEMY_DATA,
  GET_ANALYTICS_DATA,
  GET_CRM_DATA,
  GET_CRYPTO_DATA,
  GET_ECOMMERCE_DATA,
  GET_HC_DATA,
  GET_METRICS_DATA,
  GET_WIDGETS_DATA,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  analyticsData: null,
  ecommerceData: null,
  crmData: null,
  cryptoData: null,
  metricsData: null,
  widgetsData: null,
  healthCare: null,
  academyData: null,
};

const dashboardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_ANALYTICS_DATA, (state, action) => {
      state.analyticsData = action.payload;
    })
    .addCase(GET_ECOMMERCE_DATA, (state, action) => {
      state.ecommerceData = action.payload;
    })
    .addCase(GET_ACADEMY_DATA, (state, action) => {
      state.academyData = action.payload;
    })
    .addCase(GET_CRM_DATA, (state, action) => {
      state.crmData = action.payload;
    })
    .addCase(GET_CRYPTO_DATA, (state, action) => {
      state.cryptoData = action.payload;
    })
    .addCase(GET_METRICS_DATA, (state, action) => {
      state.metricsData = action.payload;
    })
    .addCase(GET_WIDGETS_DATA, (state, action) => {
      state.widgetsData = action.payload;
    })
    .addCase(GET_HC_DATA, (state, action) => {
      state.healthCare = action.payload;
    });
});

export default dashboardReducer;
