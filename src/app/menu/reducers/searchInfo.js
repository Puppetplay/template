import { CHANGE_SEARCH_INFO } from '../constants';

const searchInfo = (state = [], action) => {
    console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_INFO:
            console.log('55555');
            console.log(action.searchInfo);
            return action.searchInfo;
        default:
            return state;
    }
};

export default searchInfo;
