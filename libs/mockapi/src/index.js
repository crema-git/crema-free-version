import mock from './lib/MockConfig';
import './lib/index';

export * from './fakedb/account';
export * from './fakedb/account/countries';
mock.onAny().passThrough();
