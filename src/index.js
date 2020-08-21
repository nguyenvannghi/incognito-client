import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import LoadingAction from 'app/components/loadingAction';
import LoadingApp from 'app/components/loadingApp';
import store from 'app/redux/store';
import AppRoutes from 'app/routes';
import { initialLocalization } from 'app/utils/localization';
import createHostListener from 'cross-domain-storage/host';
import { IntlProvider } from 'react-intl-redux';
import { Provider } from 'react-redux';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store(initialLocalization)}>
        <IntlProvider>
            <LoadingApp />
            <LoadingAction />
            <AppRoutes />
        </IntlProvider>
    </Provider>,
    document.getElementById('root'),
);

createHostListener([
    {
        origin: 'http://localhost:3000',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'http://localhost:3001',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'https://lightshadowbox.vercel.app',
        allowedMethods: ['get', 'set', 'remove'],
    },
    {
        origin: 'https://lightshadowbox.app',
        allowedMethods: ['get', 'set', 'remove'],
    },
]);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
