import axios from '@crema/services/axios';

const MockAdapter = require('axios-mock-adapter');

export default new MockAdapter(axios, { delayResponse: 200 });
