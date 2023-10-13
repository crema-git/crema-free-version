import {
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
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  invoiceList: [],
  invoiceSettings: {},
  clientsList: [],
  folderList: [],
  selectedInvoice: null,
  selectedClient: null,
};

const invoiceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_INVOICE_LIST, (state, action) => {
      state.invoiceList = action.payload;
    })
    .addCase(GET_INVOICE_FOLDER_LIST, (state, action) => {
      state.folderList = action.payload;
    })
    .addCase(GET_INVOICE_DETAIL, (state, action) => {
      state.selectedInvoice = action.payload;
    })
    .addCase(GET_CLIENT_DETAIL, (state, action) => {
      state.selectedClient = action.payload;
    })
    .addCase(GET_INVOICE_SETTINGS, (state, action) => {
      state.invoiceSettings = action.payload;
    })
    .addCase(GET_CLIENT_LIST, (state, action) => {
      state.clientsList = action.payload;
    })
    .addCase(ADD_NEW_INVOICE, (state, action) => {
      state.invoiceList = [action.payload, ...state.invoiceList];
    })
    .addCase(ADD_NEW_CLIENTS, (state, action) => {
      state.clientsList = [action.payload, ...state.clientsList];
    })
    .addCase(UPDATE_INVOICE, (state, action) => {
      state.invoiceList = action.payload;
    })
    .addCase(UPDATE_CLIENTS, (state, action) => {
      state.clientsList = action.payload;
    })
    .addCase(UPDATE_INVOICE_SETTINGS, (state, action) => {
      state.invoiceSettings = action.payload;
    });
});

export default invoiceReducer;
