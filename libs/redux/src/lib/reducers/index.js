import { combineReducers } from 'redux';
import Settings from './Setting';
import Common from './Common';
import Dashboard from './Dashboard';
import ToDoApp from './ToDoApp';
import MailApp from './MailApp';
import ContactApp from './ContactApp';
import ScrumboardApp from './ScrumboardApp';
import Ecommerce from './Ecommerce';
import ChatApp from './ChatApp';
import Wall from './Wall';
import UserList from './UserList';

const reducers = () =>
  combineReducers({
    settings: Settings,
    dashboard: Dashboard,
    common: Common,
    todoApp: ToDoApp,
    mailApp: MailApp,
    userList: UserList,
    contactApp: ContactApp,
    scrumboardApp: ScrumboardApp,
    ecommerce: Ecommerce,
    chatApp: ChatApp,
    wall: Wall,
  });
export default reducers;
