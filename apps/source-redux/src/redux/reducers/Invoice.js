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

const initialState = {
  invoiceList: [],
  invoiceSettings: {},
  clientsList: [],
  folderList: [],
  selectedInvoice: null,
  selectedClient: null,
};

const invoiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVOICE_LIST:
      return {
        ...state,
        invoiceList: action.payload,
      };

    case GET_INVOICE_FOLDER_LIST:
      return {
        ...state,
        folderList: action.payload,
      };

    case GET_INVOICE_DETAIL:
      return {
        ...state,
        selectedInvoice: action.payload,
      };
    case GET_CLIENT_DETAIL:
      return {
        ...state,
        selectedClient: action.payload,
      };
    case GET_INVOICE_SETTINGS:
      return {
        ...state,
        invoiceSettings: action.payload,
      };
    case GET_CLIENT_LIST:
      return {
        ...state,
        clientsList: action.payload,
      };
    case ADD_NEW_INVOICE:
      return {
        ...state,
        invoiceList: [action.payload, ...state.invoiceList],
      };
    case ADD_NEW_CLIENTS:
      return {
        ...state,
        clientsList: [action.payload, ...state.clientsList],
      };
    case UPDATE_INVOICE: {
      return {
        ...state,
        invoiceList: action.payload,
      };
    }
    case UPDATE_CLIENTS: {
      return {
        ...state,
        clientsList: action.payload,
      };
    }
    case UPDATE_INVOICE_SETTINGS: {
      return {
        ...state,
        invoiceSettings: action.payload,
      };
    }

    default:
      return state;
  }
};

export default invoiceReducer;
