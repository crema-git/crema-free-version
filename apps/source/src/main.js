import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import App from './app';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
