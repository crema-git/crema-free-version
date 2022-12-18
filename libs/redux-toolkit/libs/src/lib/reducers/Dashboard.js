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

// const dashboardReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case GET_ANALYTICS_DATA:
//       return {
//         ...state,
//         analyticsData: action.payload,
//       };

//     case GET_ECOMMERCE_DATA:
//       return {
//         ...state,
//         ecommerceData: action.payload,
//       };

//     case GET_ACADEMY_DATA:
//       return {
//         ...state,
//         academyData: action.payload,
//       };

//     case GET_CRM_DATA:
//       return {
//         ...state,
//         crmData: action.payload,
//       };

//     case GET_CRYPTO_DATA:
//       return {
//         ...state,
//         cryptoData: action.payload,
//       };

//     case GET_METRICS_DATA:
//       return {
//         ...state,
//         metricsData: action.payload,
//       };

//     case GET_WIDGETS_DATA:
//       return {
//         ...state,
//         widgetsData: action.payload,
//       };

//     case GET_HC_DATA:
//       return {
//         ...state,
//         healthCare: action.payload,
//       };

//     default:
//       return state;
//   }
// };
export default dashboardReducer;
