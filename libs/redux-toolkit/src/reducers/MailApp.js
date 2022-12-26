import {
  CHANGE_READ_STATUS,
  COMPOSE_MAIL,
  GET_CONNECTION_LIST,
  GET_FOLDER_LIST,
  GET_LABEL_LIST,
  GET_MAIL_DETAIL,
  GET_MAIL_LIST,
  NULLIFY_MAIL,
  TOGGLE_MAIL_DRAWER,
  UPDATE_MAIL_FOLDER,
  UPDATE_MAIL_LABEL,
  UPDATE_STARRED_STATUS,
  UPDATED_MAIL_DETAIL,
} from '@crema/constants/ActionTypes';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  mailList: [],
  totalMails: null,
  mailDrawer: false,
  labelList: [],
  folderList: [],
  selectedMail: null,
  connectionList: [],
};

const mailReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_MAIL_LIST, (state, action) => {
      state.mailList = action.payload.data;
      state.totalMails = action.payload.count;
    })
    .addCase(GET_FOLDER_LIST, (state, action) => {
      state.folderList = action.payload;
    })
    .addCase(TOGGLE_MAIL_DRAWER, (state, action) => {
      state.mailDrawer = !state.mailDrawer;
    })
    .addCase(GET_LABEL_LIST, (state, action) => {
      state.labelList = action.payload;
    })
    .addCase(GET_CONNECTION_LIST, (state, action) => {
      state.connectionList = action.payload;
    })
    .addCase(COMPOSE_MAIL, (state, action) => {
      const path = action.payload.pathname.split('/');
      let mailList = state.mailList;
      let totalMails = state.totalMails;
      if (
        path[path.length - 2] === 'folder' &&
        path[path.length - 1] === 'sent'
      ) {
        mailList = [action.payload.data, ...state.mailList];
        totalMails = state.totalMails + 1;
      }
      state.mailList = mailList;
      state.totalMails = totalMails;
    })
    .addCase(UPDATE_MAIL_FOLDER, (state, action) => {
      const updatedList = state.mailList.filter(
        (mail) => !action.payload.includes(mail.id)
      );
      state.mailList = updatedList;
      state.totalMails = updatedList.length;
    })
    .addCase(UPDATE_MAIL_LABEL, (state, action) => {
      let mailIds = action.payload.map((mail) => mail.id);
      const updatedList = state.mailList.map((mail) => {
        if (mailIds.includes(mail.id)) {
          return action.payload.find(
            (selectedMail) => selectedMail.id === mail.id
          );
        } else {
          return mail;
        }
      });
      state.mailList = updatedList;
    })
    .addCase(CHANGE_READ_STATUS, (state, action) => {
      let mailIds = action.payload.map((mail) => mail.id);
      const updatedList = state.mailList.map((mail) => {
        if (mailIds.includes(mail.id)) {
          return action.payload.find(
            (selectedMail) => selectedMail.id === mail.id
          );
        } else {
          return mail;
        }
      });
      state.mailList = updatedList;
    })
    .addCase(UPDATE_STARRED_STATUS, (state, action) => {
      let mailIds = action.payload.data.map((mail) => mail.id);
      const updatedList = state.mailList.map((mail) => {
        if (mailIds.includes(mail.id)) {
          return action.payload.data.find(
            (selectedMail) => selectedMail.id === mail.id
          );
        } else {
          return mail;
        }
      });
      const filteredList =
        action.payload.folderName === 'starred'
          ? updatedList.filter((item) => item.isStarred)
          : updatedList;
      const total =
        action.payload.folderName === 'starred'
          ? state.totalMails - action.payload.data.length
          : state.totalMails;
      state.mailList = filteredList;
      state.totalMails = total;
    })
    .addCase(GET_MAIL_DETAIL, (state, action) => {
      state.selectedMail = action.payload;
    })
    .addCase(UPDATED_MAIL_DETAIL, (state, action) => {
      state.selectedMail = action.payload;
      state.mailList = state.mailList.map((data) =>
        data.id === action.payload.id ? action.payload : data
      );
    })
    .addCase(NULLIFY_MAIL, (state, action) => {
      state.selectedMail = null;
    });
});

export default mailReducer;
