import axios from './ApiConfig';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios, {delayResponse: 200});

export default mock
