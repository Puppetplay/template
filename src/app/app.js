import React from 'react';
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/ConfigureStore';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import MainContainer from './menu/MainContainer'

render(
    <MainContainer/>,
    document.getElementById('app')
);