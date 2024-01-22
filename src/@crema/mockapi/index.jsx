import mock from './apis/MockConfig';
import './apis';

export * from './fakedb/account';
export * from './fakedb/account/countries';
mock.onAny().passThrough();
