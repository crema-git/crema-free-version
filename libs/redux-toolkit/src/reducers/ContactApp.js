import {
  CREATE_NEW_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT_DETAIL,
  GET_CONTACT_FOLDER_LIST,
  GET_CONTACT_LABEL_LIST,
  GET_CONTACT_LIST,
  TOGGLE_CONTACT_DRAWER,
  UPDATE_CONTACT_DETAIL,
  UPDATE_CONTACT_LABEL,
  UPDATE_CONTACT_STARRED_STATUS,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  contactList: [],
  totalContacts: null,
  contactDrawer: false,
  labelList: [],
  folderList: [],
  selectedContact: null,
};
const contactReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_CONTACT_LIST, (state, action) => {
      state.contactList = action.payload.data;
      state.totalContacts = action.payload.count;
    })
    .addCase(GET_CONTACT_FOLDER_LIST, (state, action) => {
      state.folderList = action.payload;
    })
    .addCase(TOGGLE_CONTACT_DRAWER, (state, action) => {
      state.contactDrawer = !state.contactDrawer;
    })
    .addCase(GET_CONTACT_LABEL_LIST, (state, action) => {
      state.labelList = action.payload;
    })
    .addCase(CREATE_NEW_CONTACT, (state, action) => {
      state.contactList = [action.payload, ...state.contactList];
      state.totalContacts = state.totalContacts + 1;
    })
    .addCase(DELETE_CONTACT, (state, action) => {
      state.contactList = action.payload.data;
      state.totalContacts = action.payload.count;
    })
    .addCase(UPDATE_CONTACT_LABEL, (state, action) => {
      let contactIds = action.payload.data.map((contact) => contact.id);
      const updatedList = state.contactList.map((contact) => {
        if (contactIds.includes(contact.id)) {
          return action.payload.data.find(
            (selectedContact) => selectedContact.id === contact.id
          );
        } else {
          return contact;
        }
      });
      const filteredList =
        action.payload.labelName === 'label'
          ? updatedList.filter(
              (item) => item.label !== action.payload.labelType
            )
          : updatedList;

      state.contactList = filteredList;
      state.totalContacts = filteredList.length;
    })
    .addCase(UPDATE_CONTACT_STARRED_STATUS, (state, action) => {
      let contactIds = action.payload.data.map((contact) => contact.id);
      const updatedList = state.contactList.map((contact) => {
        if (contactIds.includes(contact.id)) {
          return action.payload.data.find(
            (selectedContact) => selectedContact.id === contact.id
          );
        } else {
          return contact;
        }
      });
      const filteredList =
        action.payload.folderName === 'starred'
          ? updatedList.filter((item) => item.isStarred)
          : updatedList;
      const total =
        action.payload.folderName === 'starred'
          ? state.totalContacts - action.payload.data.length
          : state.totalContacts;

      state.contactList = filteredList;
      state.totalContacts = total;
    })
    .addCase(GET_CONTACT_DETAIL, (state, action) => {
      state.selectedContact = action.payload;
    })
    .addCase(UPDATE_CONTACT_DETAIL, (state, action) => {
      state.selectedContact = action.payload;
      state.contactList = state.contactList.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
    });
});

export default contactReducer;
