import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Rdeux/redux-store';
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App store={store}
                state={store.getState()} />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();

