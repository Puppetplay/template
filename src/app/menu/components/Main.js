import React, { Component } from 'react';
import PageMain from './pageMain/PageMain';

class Main extends Component {
    // 메뉴의 컨트롤을 구현합니다.
    render() {
        let page = (<PageMain
            changeSearchInfo={this.props.changeSearchInfo}
            searchInfo={this.props.searchInfo}
        />);

        return (
            <div>
                {page}
            </div>
        );
    }
}

export default Main;