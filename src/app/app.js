import React from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/ConfigureStore';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import Menu from './menu/Menu'

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
const history = syncHistoryWithStore(appHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Menu}>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);