import axios from '@crema/services/axios';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const MockAdapter = require('axios-mock-adapter');

export default new MockAdapter(axios, {delayResponse: 200});
