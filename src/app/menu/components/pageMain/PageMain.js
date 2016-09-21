import React, { Component } from 'react';
import APIs from '../../Apis';
import SOGrid from '../../common/SOGrid'
import GridInfo from '../GridInfo';
import Search from './Search';


class PageMain extends Component {

    // 페이지가 처음 생성될때 호출됩니다.
    constructor() {
        super(...arguments);
        // 그리드설정을 불러옵니다.
        this.topGridSetting = GridInfo.getGridInfo('gridTop');
    }

    // 컴포넌트가 렌더링 된 후 호출 된다
    componentDidMount(){
        this.gridTop = this.refs["topGrid"];
        this.gridViewTop = this.gridTop.getGridView();
    }

    // 조회
    onSearch(){
        this.selectSlip();
    }
    // 렌더링을 정의합니다.
    render() {
        return (
            <div>
                <div>
                    <Search
                        fetchTickets = {this.props.fetchTickets}
                        searchState = {this.props.searchState}
                        onSearch={this.onSearch.bind(this)}/>
                </div>
                <div>
                    <SOGrid ref="topGrid" gridSetting={this.topGridSetting} />
                </div>
            </div>
        );
    }

    // 전표데이터 불러와서 바인딩하기
    selectSlip() {
        let promise = APIs.selectSlip('');
        promise
            .then((responseData) => {
                this.gridTop.bindData(responseData);
            })
            .catch((error) => {
                alert(error);
            });
    }
}

export default PageMain;


