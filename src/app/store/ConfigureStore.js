import { createStore, combineReducers } from 'redux'
import * as reducers from '../reducers'
import { routerReducer } from 'react-router-redux'

export default function configureStore(preloadedState) {
    const reducer = combineReducers({
        ...reducers,
        routing: routerReducer
    })
    const store = createStore(reducer, preloadedState)

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default
            store.replaceReducer(nextReducer)
        })
    }

    return store
}