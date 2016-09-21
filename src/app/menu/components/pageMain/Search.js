import React, { Component } from 'react';
import Actions from '../Actions';

class Search extends Component {

    // 조회조건 컨포넌트가 처음 생성될때 호출됩니다.
    constructor() {
        super(...arguments);
    }

    // 조회조건 컨포넌트가 렌더링 된 후 호출됩니다.
    componentDidMount(){
    }

    // 조회버튼 클릭
    searchButtonClick() {
        this.props.fetchTickets();
    }

    // 조회조건변경
    searchStateChange(event) {
        let searchState = event.target.value;
        Actions.changeSearchInfo(searchState);
    }

    // 렌더링을 정의합니다.
    render() {
        return (
            <div>
                <input type="search" value={this.props.searchState}
                       onChange={this.searchStateChange.bind(this)}/>
                <input type="button" value="조회" onClick={this.searchButtonClick.bind(this)}/>
            </div>
        );
    }
}


export default Search;