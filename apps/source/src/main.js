import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import AppGridContainer from "@crema/components/AppGridContainer";

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <StrictMode>
      <AppGridContainer/>
    <App />
  </StrictMode>
);
