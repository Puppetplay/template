import React from 'react'
import { Link } from 'react-router'

const menuData = [
    {
        title: 'HORIZON 홈',
        imageNormal: 'imgs/common/menu_01.png',
        imageSelected: 'imgs/common/menu_01_on.png',
        route: 'main',
    },
    {
        title: 'SmartA ONLINE 회계',
        imageNormal: 'imgs/common/menu_02.png',
        imageSelected: 'imgs/common/menu_02_on.png',
        // route: 'account/financial/general',
        route: 'account/superbook',
    },
    {
        title: 'SmartA ONLINE 인사',
        imageNormal: 'imgs/common/menu_03.png',
        imageSelected: 'imgs/common/menu_03_on.png',
        route: 'humanresource',
    },
    {
        title: '일정관리',
        imageNormal: 'imgs/common/menu_09.png',
        imageSelected: 'imgs/common/menu_09_on.png',
        route: 'schedule',
    },
    {
        title: '거래처관리',
        imageNormal: 'imgs/common/menu_01.png',
        imageSelected: 'imgs/common/menu_01_on.png',
        route: 'customer',
    },
    {
        title: '클라우드오피스',
        imageNormal: 'imgs/common/menu_04.png',
        imageSelected: 'imgs/common/menu_04_on.png',
        route: 'cloudoffice',
    },
    {
        title: '회사메일',
        imageNormal: 'imgs/common/menu_05.png',
        imageSelected: 'imgs/common/menu_05_on.png',
        route: 'mail',
    },
    {
        title: '클라우드스토리지',
        imageNormal: 'imgs/common/menu_06.png',
        imageSelected: 'imgs/common/menu_06_on.png',
        route: 'cloudstorage',
    },
    {
        title: '전자결재',
        imageNormal: 'imgs/common/menu_07.png',
        imageSelected: 'imgs/common/menu_07_on.png',
        route: 'approval',
    },
    {
        title: '커뮤니케이션',
        imageNormal: 'imgs/common/menu_08.png',
        imageSelected: 'imgs/common/menu_08_on.png',
        route: 'communication',
    },
    {
        title: '클라우드팩스',
        imageNormal: 'imgs/common/menu_10.png',
        imageSelected: 'imgs/common/menu_10_on.png',
        route: 'cloudfax',
    },
    {
        title: '회사초기설정',
        imageNormal: 'imgs/common/menu_01.png',
        imageSelected: 'imgs/common/menu_01_on.png',
        route: 'initialization',
    },
    {
        title: '회사설정',
        imageNormal: 'imgs/common/menu_01.png',
        imageSelected: 'imgs/common/menu_01_on.png',
        route: 'company',
    },
    {
        title: '개인설정',
        imageNormal: 'imgs/common/menu_01.png',
        imageSelected: 'imgs/common/menu_01_on.png',
        route: 'personal',
    },
    {
        title: '할일',
        imageNormal: 'imgs/common/menu_01.png',
        imageSelected: 'imgs/common/menu_01_on.png',
        route: 'todo',
    },
];

class Navigation extends React.Component {

    static isHover = false

    state = {
        hover: Navigation.isHover,
    }

    onMouseEnter = (event) => {
        this.setState({
            hover: true,
        })
        Navigation.isHover = true
    }

    onMouseLeave = (event) => {
        this.setState({
            hover: false,
        })
        Navigation.isHover = false
    }

    render() {
        const currentRoute = location.hash.replace(/^#\//, '').replace(/\/$/, '')
        const currentRouteRoot = currentRoute.split('/')[0]
        const lists = menuData.map((model, index) => {
            let style = {}
            const routeRoot = model.route.split('/')[0]
            if(currentRouteRoot === routeRoot) {
                style.backgroundImage = 'url(' + model.imageSelected + ')'
                style.backgroundColor = '#21252f'
            } else {
                style.backgroundImage = 'url(' + model.imageNormal + ')'
            }
            return (
                <li style={style} key={index}><Link to={model.route}>{model.title}</Link></li>
            );
        });
        let classNameLNB = "lnb"
        if(this.state.hover) {
            classNameLNB += " over"
        }
        return (
            <div className={classNameLNB} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="lnbin">
                    <div className="bdbx">
                        <ul>
                            {lists}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;
