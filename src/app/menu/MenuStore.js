import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const logger = (store) => (next) => (action) => {
    if (typeof action !== "function") {
        console.log('dispatching:', action);
    }
    return next(action);
}

const MenuStore = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);

export default MenuStore;
