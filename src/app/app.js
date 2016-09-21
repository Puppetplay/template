import React from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/ConfigureStore';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import MainContainer from './menu/MainContainer'

const store = configureStore();
const appHistory = useRouterHistory(createHashHistory)({queryKey: false});
const history = syncHistoryWithStore(appHistory, store);

render(
    <Router history={history}>
        <Route path="/" component={MainContainer}></Route>
    </Router>,
    document.getElementById('app')
);

