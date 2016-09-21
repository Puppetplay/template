import React, { Component } from 'react';
import { SinglePage } from '../components/Layout';
import SmartASubNavigation from '../components/Nav';
import saCss from './css/sa.css';
import BasicInfoCss from './css/menu.css';
import Main from './components/Main'


class Menu extends Component {

    // 메뉴가 처음 열릴때 실행됩니다.
    constructor() {
        super(...arguments);
    }

    // 메뉴의 컨트롤을 구현합니다.
    render() {
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
                    <Main/>
                </div>
            </SinglePage>
        );
    }
}

export default Menu;