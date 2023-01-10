import {configureStore} from '@reduxjs/toolkit';
import reducers from '../reducers';
export default function ConfigureStore() {
  return configureStore({
    reducer: reducers(),
  });
}
