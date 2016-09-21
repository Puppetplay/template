import React from 'react';
import { Link } from 'react-router';
import { SubNavigationBar } from './Layout';

const subMenu = [
    {
        name: '재무회계',
    },
    {
        name: '자동회계처리',
        children: [
            {
                name: '자동전표처리',
                children: [
                    {
                        name: '전자세금계산서',
                        url: '#/account/superbook/etaxbill',
                    },
                    {
                        name: '전자계산서',
                        url: '#/account/superbook/ebill',
                    },
                    {
                        name: '신용카드',
                        url: '#/account/superbook/creditcard',
                    },
                    {
                        name: '현금영수증',
                        url: '#/account/superbook/cashbook',
                    },
                    {
                        name: '통장',
                        url: '#/account/superbook/bankbook',
                    },
                ],
            },
            {
                name: '자료수집현황',
                // url: '#',
            },
            {
                name: '사이트비교현황',
                // url: '#',
            },
            {
                name: '기초정보등록',
                url: '#/account/superbook/basicinfo',
            },
        ],
    },
    {
        name: '부가가치세',
    },
    {
        name: '고정자산/자금예산',
    },
    {
        name: '기초데이터',
    },
];

class Navigation extends React.Component {
    state = {
        subMenu: undefined,
    }

    componentWillMount() {
        this.initMenuData();
    }

    initMenuData() {
        const currentUrl = location.hash;
        let subMenuData = this.setInitialMenuData(subMenu);
        const currentPositions = this.getPositionFromKeyValue(subMenuData, "url", currentUrl);
        if(Array.isArray(currentPositions) && currentPositions.length) {
            currentPositions.map(model => {
                subMenuData = this.setTreeData(subMenuData, model.depth, model.index, "open", true);
            });
        }

        this.setState({
            subMenu: subMenuData,
            selectedSubMenu: {
                depth: null,
                index: null,
            },
        });
    }

    setInitialMenuData(collection, depth = 1) {
        if(!Array.isArray(collection)) {
            return collection;
        }
        return collection.map((model, index) => {
            model.open = false;
            model.depth = depth;
            model.index = index;
            model.children = this.setInitialMenuData(model.children, depth + 1);
            return model;
        });
    }

    setTreeData(collection, depth, index, key, value, baseDepth = 1, childKey = "children", propagation = true) {
        if(Array.isArray(collection)) {
            return collection.map((model, modelIndex) => {
                if(depth == baseDepth && index == modelIndex) {
                    model[key] = value;
                } else{
                    model.children = this.setTreeData(model[childKey], depth, index, key, value, baseDepth + 1, childKey);
                    if(propagation && this.isMatchChildValueForKey(model.children, key, value)) {
                        model[key] = value;
                    }
                }
                return model;
            });
        }
        return undefined;
    }

    isMatchChildValueForKey(collection, key, value) {
        if(typeof collection === "undefined") {
            return false;
        }
        if(!Array.isArray(collection)) {
            return collection[key] == value;
        }
        for(const model of collection) {
            if(this.isMatchChildValueForKey(model, key, value)) {
                return true;
            }
        }
        return false;
    }

    getPositionFromKeyValue(collection, key, value, depth = 1, childKey = "children") {
        let queue = [];
        if(Array.isArray(collection)) {
            collection.map((model, index) => {
                if(model[key] == value) {
                    queue.push({
                        depth: depth,
                        index: index,
                    });
                }
                const found = this.getPositionFromKeyValue(model[childKey], key, value, depth + 1, childKey);
                if(found.length) {
                    queue.push(...found);
                }
            });
        }
        return queue;
    }

    getTreeData(collection, depth, index, key, baseDepth = 1, childKey = "children") {
        if(Array.isArray(collection)) {
            let modelIndex;
            const length = collection.length;
            for(modelIndex = 0; modelIndex < length; ++modelIndex) {
                const model = collection[modelIndex];
                if(depth == baseDepth && index == modelIndex) {
                    return model[key];
                } else{
                    return this.getTreeData(model[childKey], depth, index, key, baseDepth + 1, childKey);
                }
            }
        }
        return undefined;
    }

    handleClick = (depth, index, event) => {
        const nextState = {};
        const currentValue =  this.getTreeData(this.state.subMenu, depth, index, "open");
        nextState.subMenu = this.setTreeData(this.state.subMenu, depth, index, "open", !currentValue);
        nextState.selectedSubMenu = {
            depth: depth,
            index: index,
        };
        this.setState(nextState);
    }

    getSubMenuElement(subMenu, depth) {
       let className = "menu_lst_depth" + depth.toString();

       const list = subMenu.map((menu, index) => {
           let childrenElements;
           if (menu.children && menu.open) {
               childrenElements = this.getSubMenuElement(menu.children, depth + 1);
           }
           const key = `${depth}-${index}`
           const subClassName = menu.open ? "open" : null;

           return(
               <li key={key} className={subClassName}>
                   <a href={menu.url} onClick={this.handleClick.bind(this, depth, index)} >
                       <div className="sp_lux"></div>
                       <div className="">
                           {menu.name}
                       </div>
                   </a>
                   {childrenElements}
               </li>
           )
       });

       return (
           <ul className={className}>
               {list}
           </ul>
       )
   }

    render() {
        return (
            <SubNavigationBar
                title={<h1><span>SmartA ONLINE</span>회계</h1>}
            >
                <div className="menu_btnbx">
                    <a href="#" className="LUX_basic_btn Default btn_allmenu">
                        <span className="sp_lux"></span>
                        <span>회계전체메뉴</span>
                    </a>
                    <a href="#" className="LUX_basic_btn Default btn_bookmark">
                        <span className="sp_lux"></span>
                        <span>메뉴즐겨찾기</span>
                    </a>
                </div>

                <div className="menu_lst">
                    <ul className="menu_lst_depth1">
                        {this.getSubMenuElement(this.state.subMenu, 1)}
                    </ul>
                </div>
            </SubNavigationBar>
        )
    }
}

export default Navigation
