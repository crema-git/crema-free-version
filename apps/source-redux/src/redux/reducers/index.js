import { combineReducers } from 'redux';
import Settings from './Setting';
import Common from './Common';
import Dashboard from './Dashboard';
import ToDoApp from './ToDoApp';
import MailApp from './MailApp';
import ContactApp from './ContactApp';
import ScrumboardApp from './ScrumboardApp';
import InvoiceApp from './Invoice';
import Ecommerce from './Ecommerce';
import CalendarApp from './CalendarApp';
import ChatApp from './ChatApp';
import Wall from './Wall';
import Blogs from './Blogs';
import UserList from './UserList';

const reducers = () =>
  combineReducers({
    settings: Settings,
    dashboard: Dashboard,
    common: Common,
    todoApp: ToDoApp,
    calendarApp: CalendarApp,
    mailApp: MailApp,
    userList: UserList,
    contactApp: ContactApp,
    scrumboardApp: ScrumboardApp,
    ecommerce: Ecommerce,
    chatApp: ChatApp,
    invoiceApp: InvoiceApp,
    wall: Wall,
    blogs: Blogs,
  });
export default reducers;
