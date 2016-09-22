import CHANGE_SEARCH_INFO from './constants';

let Actions = {
    changeSearchInfo(searchState) {
        return {
            type: CHANGE_SEARCH_INFO,
            searchInfo: searchState
        }
    }
};

export default Actions;