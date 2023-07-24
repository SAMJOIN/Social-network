import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Rdeux/redux-store';

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderEntrieTree(state) {
    root.render(
        <React.StrictMode>
            <App state={state}
                store={store}
                dispatch={store.dispatch.bind(store)} />
        </React.StrictMode>
    );
}

renderEntrieTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntrieTree(state);
}
);


reportWebVitals();

