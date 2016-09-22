import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import MenuStore from './MenuStore';
import { SinglePage } from '../components/Layout';
import SmartASubNavigation from '../components/Nav';
import saCss from './css/sa.css';
import BasicInfoCss from './css/menu.css';
import Main from './components/Main';
import Actions from './Actions';

class Menu extends Component {

    // 메뉴가 처음 열릴때 실행됩니다.
    constructor() {
        super(...arguments);
    }

    // 메뉴의 컨트롤을 구현합니다.
    render() {
        console.log('1');
        console.log(this.props);
        console.log('2');
        return (
            <SinglePage
                snb={<SmartASubNavigation/>}
                className="sa"
            >
                <div className="sa_container">
                    <div className="sa_container_header">
                        <div className="container_menutree">
                            SmartA ONLINE 회계 &gt; 자동회계처리 &gt; <strong>기초정보등록</strong></div>
                        <h1>기초정보등록</h1>
                    </div>
                    <Main
                        changeSearchInfo={this.props.changeSearchInfo}
                        searchInfo = {this.props.searchInfo}
                    />
                </div>
            </SinglePage>
        );
    }
}

const mapStateToProps = (state) => ({
    searchInfo: state.searchInfo
});


const mapDispatchToProps = (dispatch) => ({
        changeSearchInfo: (searchInfo) => dispatch(Actions.changeSearchInfo(searchInfo))
});

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

class MainContainer extends Component {
    // 메뉴의 컨트롤을 구현합니다.
    render() {
        return (
            <Provider store={MenuStore}>
                <MenuContainer
                    changeSearchInfo={this.props.changeSearchInfo}
                    searchInfo = {this.props.searchInfo}
                />
            </Provider>
        );
    }
}

export default MainContainer;