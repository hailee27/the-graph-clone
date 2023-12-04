import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './styles/index.scss';
import { NotificationProvider } from './components/context/NotificationContext';
import { HouseHoldsProvider } from './components/context/HouseHoldsContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NotificationProvider>
          <HouseHoldsProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </HouseHoldsProvider>
        </NotificationProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
