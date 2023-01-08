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

const initialState = {
  mailList: [],
  totalMails: null,
  mailDrawer: false,
  labelList: [],
  folderList: [],
  selectedMail: null,
  connectionList: [],
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MAIL_LIST:
      return {
        ...state,
        mailList: action.payload.data,
        totalMails: action.payload.count,
      };

    case GET_FOLDER_LIST:
      return {
        ...state,
        folderList: action.payload,
      };

    case TOGGLE_MAIL_DRAWER:
      return {
        ...state,
        mailDrawer: !state.mailDrawer,
      };

    case GET_LABEL_LIST:
      return {
        ...state,
        labelList: action.payload,
      };

    case GET_CONNECTION_LIST:
      return {
        ...state,
        connectionList: action.payload,
      };

    case COMPOSE_MAIL: {
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
      return {
        ...state,
        mailList,
        totalMails,
      };
    }

    case UPDATE_MAIL_FOLDER: {
      const updatedList = state.mailList.filter(
        (mail) => !action.payload.includes(mail.id)
      );
      return {
        ...state,
        mailList: updatedList,
        totalMails: state.totalMails - action.payload.length,
      };
    }

    case UPDATE_MAIL_LABEL: {
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
      return {
        ...state,
        mailList: updatedList,
      };
    }

    case CHANGE_READ_STATUS: {
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
      return {
        ...state,
        mailList: updatedList,
      };
    }

    case UPDATE_STARRED_STATUS: {
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
      return {
        ...state,
        mailList: filteredList,
        totalMails: total,
      };
    }

    case GET_MAIL_DETAIL:
      return {
        ...state,
        selectedMail: action.payload,
      };

    case UPDATED_MAIL_DETAIL:
      return {
        ...state,
        mailList: state.mailList.map((data) =>
          data.id === action.payload.id ? action.payload : data
        ),
        selectedMail: action.payload,
      };

    case NULLIFY_MAIL:
      return {
        ...state,
        selectedMail: null,
      };

    default:
      return state;
  }
};

export default mailReducer;
