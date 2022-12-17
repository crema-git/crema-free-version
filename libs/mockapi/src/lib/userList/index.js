import {mock} from "@crema/services/axios";
import userList from '../../fakedb/userList';

mock.onGet('/api/user/list').reply(200, userList);
