import mock from './lib/MockConfig';
import axios from './lib/ApiConfig';

mock.onAny().passThrough();

export default axios;
export {mock};
