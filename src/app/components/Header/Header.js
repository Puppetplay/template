import React from 'react';

class Header extends React.Component {

    render() {
        const {
            titleVisible,
        } = this.props

        return (
             <div className="header">
                <div className="bdbx" style={{position:"relative"}}>
                    <div className="bdbxin">
                        {titleVisible ? (
                            <h1 style={{float:'left'}}><img src="imgs/common/logo.png" alt="Horizon logo" /></h1>
                        ) : null}
                        <div style={{float:"left"}}>
                            <div className="bdbx">{/*Left box*/}

                                <div className="gnb_popover gnb_popover_space">
                                    <div className="gnb_btn">
                                        <button type="button" className="btn btn_space">김더존의 SPACE
                                            <span className="sp_gnb">SPACE</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div style={{float:"right"}}>
                            <div className="bdbx">{/*Right box*/}

                                <div className="gnb_popover gnb_popover_search">
                                    <div className="gnb_btn">
                                        <div className="searchbx">
                                            <span className="inpbx">
                                                <input type="text" id="gnb_search" />
                                                <label htmlFor="gnb_search" className="placeholder">찾고 싶은 메뉴를 검색하세요.</label>
                                            </span>
                                            <button type="button" className="btn"><span className="sp_gnb">검색</span></button>
                                        </div>
                                    </div>
                                    <div className="gnb_pop_scale">
                                        <span className="gnb_poparrow"></span>
                                        <div className="gnb_pop">
                                            <div className="gnb_pop_titbx">
                                                <span className="pop_tit">자주사용하는 메뉴</span>
                                            </div>
                                            <div className="gnb_popbx_area">
                                                <div className="gnb_popbx_in">
                                                    <ul className="search_suggest_lst">
                                                        <li>
                                                            <a href="#">
                                                                <div className="suggest_menu">전자세금계산서</div>
                                                                <div className="suggest_lst">매출세금계산서 발행</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="suggest_menu">SmartA ONLINE &gt; 전표관리</div>
                                                                <div className="suggest_lst">전자세금계산서 발행</div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="suggest_lst"><span>전자</span>세금계산서 자동완성 기능</div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gnb_popover gnb_pop_guickadd">
                                    <div className="gnb_btn">
                                        <button type="button" className="btn btn_quickadd"><span className="sp_gnb">빠른등록</span></button>
                                    </div>
                                    <div className="gnb_pop_scale">
                                        <span className="gnb_poparrow"></span>
                                        <div className="gnb_pop">
                                            <div className="gnb_pop_titbx">
                                                <span className="pop_tit">빠른등록</span>
                                                <span className="pop_subinfo">새로운 정보를 등록하세요.</span>
                                            </div>
                                            <div className="gnb_popbx_area">
                                                <div className="gnb_popbx_in">
                                                    <ul className="guickbtn_lst">
                                                        <li className="guickbtn01">
                                                            <a href="#"><span className="sp_gnb"></span>전표입력</a>
                                                        </li>
                                                        <li className="guickbtn02">
                                                            <a href="#"><span className="sp_gnb"></span>매출 전자세금계산서 발행</a>
                                                        </li>
                                                        <li className="guickbtn03">
                                                            <a href="#"><span className="sp_gnb"></span>전자청구서 발행</a>
                                                        </li>
                                                        <li className="guickbtn04">
                                                            <a href="#"><span className="sp_gnb"></span>거래처 등록</a>
                                                        </li>
                                                        <li className="guickbtn05">
                                                            <a href="#"><span className="sp_gnb"></span>연락처 등록</a>
                                                        </li>
                                                        <li className="guickbtn06">
                                                            <a href="#"><span className="sp_gnb"></span>메일 쓰기</a>
                                                        </li>
                                                        <li className="guickbtn07">
                                                            <a href="#"><span className="sp_gnb"></span>일정 등록</a>
                                                        </li>
                                                        <li className="guickbtn08">
                                                            <a href="#"><span className="sp_gnb"></span>할일 등록</a>
                                                        </li>
                                                        <li className="guickbtn09">
                                                            <a href="#"><span className="sp_gnb"></span>대화방 만들기</a>
                                                        </li>
                                                        <li className="guickbtn10">
                                                            <a href="#"><span className="sp_gnb"></span>문서 작성</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gnb_popover">
                                    <div className="gnb_btn">
                                        <button type="button" className="btn btn_notifi">
                                            <span className="sp_gnb">알림</span>
                                            <span className="badge">99+</span>
                                        </button>
                                    </div>
                                    <div className="gnb_pop_scale">
                                        <span className="gnb_poparrow"></span>
                                        <div className="gnb_pop">
                                            <div className="gnb_pop_titbx">
                                                <span className="pop_tit">알림</span>
                                                <span className="pop_admin">
                                                    <button type="button" className="btn btn_bdbx">모두읽음처리</button>
                                                    <button type="button" className="btn btn_bdbx">설정</button>
                                                </span>
                                            </div>
                                            <div className="gnb_popbx_area">
                                                <div className="gnb_popbx_in">
                                                    <ul className="notifi_lst">
                                                        <li>
                                                            <a href="#">
                                                                <div className="sp_gnb notifi_mail_on"></div>
                                                                <div className="notifibx">
                                                                    <p>"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                    <span className="time">15분전</span>
                                                                    <span className="name">김더존(duzonkin@duzon.com)</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="sp_gnb notifi_mail_off"></div>
                                                                <div className="notifibx">
                                                                    <p>"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                    <span className="time">15분전</span>
                                                                    <span className="name">김더존(duzonkin@duzon.com)</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <button type="button" className="btn btn_more">
                                                        <div>모두보기</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gnb_popover gnb_popover_skypoint">
                                    <div className="gnb_btn">
                                        <button type="button" className="btn btn_skypoint"><span className="sp_gnb">SKY 포인트</span></button>
                                    </div>
                                    <div className="gnb_pop_scale">
                                        <span className="gnb_poparrow"></span>
                                        <div className="gnb_pop">
                                            <div className="gnb_pop_titbx">
                                                <span className="pop_tit">SKY포인트</span>
                                                <span className="pop_subinfo">SKY포인트 정보를 확인합니다</span>
                                            </div>
                                            <div className="gnb_popbx_area">
                                                <div className="skypoint_lst">
                                                    <div className="restpoint restpoint_company">
                                                        <div className="restpoint_tit">
                                                            <span className="sp_gnb"></span>남은 포인트
                                                            <span className="name">(DZONBIZON)</span>
                                                        </div>
                                                        <div className="usepointlst">
                                                            <table className="tblbx">
                                                                <caption><span className="blind"></span></caption>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">2016년 4월 사용</th>
                                                                    <td><span className="num">4,000</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2016년 12월 사용</th>
                                                                    <td><span className="num">4,000,000</span></td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="restpoint_num">
                                                            <span className=""><span className="sp_gnb">point</span><span className="num">3,456</span></span>
                                                        </div>
                                                        <p className="point_info">자동충전일까지 <span>5</span>일 남았습니다.</p>
                                                    </div>
                                                    <div className="btnbx3">
                                                        <button type="button" className="btn">
                                                            <div>포인트 충전하기</div>
                                                        </button>
                                                        <button type="button" className="btn">
                                                            <div>포인트 사용현황</div>
                                                        </button>
                                                        <button type="button" className="btn">
                                                            <div>서비스구매 / 결제현황</div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="skypoint_lst">
                                                    <div className="restpoint restpoint_individual">
                                                        <div className="restpoint_tit">
                                                            <span className="sp_gnb"></span>남은 포인트
                                                            <span className="name">(성수현님)</span>
                                                        </div>
                                                        <div className="usepointlst">
                                                            <table className="tblbx">
                                                                <caption><span className="blind"></span></caption>
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row">2016년 4월 사용</th>
                                                                    <td><span className="num">400</span></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">2016년 12월 사용</th>
                                                                    <td><span className="num">4,000</span></td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div className="restpoint_num">
                                                            <span className=""><span className="sp_gnb">point</span><span className="num">20</span> </span>
                                                        </div>
                                                        <p className="point_info">자동충전일까지 <span>5</span>일 남았습니다.</p>
                                                    </div>
                                                    <div className="btnbx2">
                                                        <button type="button" className="btn">
                                                            <div>포인트 충전하기</div>
                                                        </button>
                                                        <button type="button" className="btn">
                                                            <div>포인트 사용현황</div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gnb_popover gnb_popover_help">
                                    <div className="gnb_btn">
                                        <button type="button" className="btn btn_helpu"><span className="sp_gnb">도움말</span></button>
                                    </div>
                                    <div className="gnb_pop_scale">
                                        <span className="gnb_poparrow"></span>
                                        <div className="gnb_pop">
                                            <div className="gnb_pop_titbx">
                                                <span className="pop_tit">도움말</span>
                                                <span className="pop_subinfo">서비스 도움말을 검색하실 수 있습니다</span>
                                            </div>
                                            <div className="gnb_popbx_area">
                                                <div className="gnb_popbx_in">
                                                    <div className="helpu_lst">
                                                        <div className="helpsearch">
                                                            <div className="searchbx">
                                                                <span className="inpbx">
                                                                    <input type="text" id="gnb_search" />
                                                                    <label htmlFor="gnb_search" className="placeholder">찾고 싶은 메뉴를 검색하세요.</label>
                                                                </span>
                                                                <button type="button" className="btn"><span className="sp_gnb">검색</span></button>
                                                            </div>
                                                        </div>
                                                        <ul style={{display:"none"}} className="helpguide_photo">
                                                            <li>
                                                                <div className="imgbx"></div>
                                                                <div className="txtbx">
                                                                    <div className="tit">도움말</div>
                                                                    <p>서비스 도움말 자세히 </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="imgbx"></div>
                                                                <div className="txtbx">
                                                                    <div className="tit">도움말</div>
                                                                    <p>서비스 도움말 자세히 </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul style={{display:"none"}} className="helpguide_movie">
                                                            <li>
                                                                <div className="imgbx"></div>
                                                                <div className="txtbx">
                                                                    <div className="btn_play">도움말</div>
                                                                    <p>서비스 도움말 자세히 </p>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="imgbx"></div>
                                                                <div className="txtbx">
                                                                    <div className="btn_play">도움말</div>
                                                                    <p>서비스 도움말 자세히 </p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                        <ul className="helpguide_lst">
                                                            <li>
                                                                <a href="#">
                                                                    <div className="sp_gnb helpguide_home"></div>
                                                                    <div className="helpguidebx">
                                                                        <p className="guidetit">"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                        <p className="guideinfo">"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                        <span className="sp_gnb"></span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="sp_gnb helpguide_play"></div>
                                                                    <div className="helpguidebx">
                                                                        <p className="guidetit">"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                        <p className="guideinfo">"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                        <span className="sp_gnb"></span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#">
                                                                    <div className="sp_gnb helpguide_play"></div>
                                                                    <div className="helpguidebx">
                                                                        <p className="guidetit">"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                        <p className="guideinfo">"[더존비즈온] 회사소개서 송부합니다."</p>
                                                                        <span className="sp_gnb"></span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <button type="button" className="btn btn_txt">
                                                            <div>단축키 보기<span className="bg">Ctrl+F1</span></div>
                                                        </button>
                                                        <button type="button" className="btn btn_txt">
                                                            <div>자주 묻는 질문<span>FAQ</span></div>
                                                        </button>
                                                        <button type="button" className="btn btn_txt">
                                                            <div>사용방법 안내<span>USER GUIDE</span></div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gnb_popover gnb_popover_userprofile">
                                    <div className="gnb_btn">
                                        <button type="button" className="btn btn_userprofile">김더존사원
                                            <span className="sp_gnb"></span>
                                            <span className="propileimg"></span>
                                        </button>
                                    </div>
                                    <div className="gnb_pop_scale">
                                        <span className="gnb_poparrow"></span>
                                        <div className="gnb_pop">
                                            <div className="gnb_popbx_area">
                                                <div className="userprofile">
                                                    <div className="myprofile">
                                                        <div className="myphoto">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <div className="myinfo"><strong>김더존</strong> 사원</div>
                                                    </div>
                                                    <ul className="profile_lst">
                                                        <li>
                                                            <a href="#">
                                                                <div className="sp_gnb profile_mail"></div>
                                                                <div className="helpguidebx">
                                                                    <p className="guidetit">duzon@duzon.com</p>
                                                                    <span className="sp_gnb"></span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <div className="sp_gnb profile_part"></div>
                                                                <div className="helpguidebx">
                                                                    <p className="guidetit">
                                                                        <span>더존비즈온/</span><span>전략부문전략마케팅본부/</span><span>디자인센터/</span><span>UIUX1팀팀원</span>
                                                                    </p>
                                                                    <span className="sp_gnb"></span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <ul className="btnbx_login">
                                                        <li>
                                                            <button type="button" className="btn btn_txt">
                                                                <div>내 정보 설정</div>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <span className="bdline"></span>
                                                            <button type="button" className="btn btn_txt">
                                                                <div>회사관리 설정</div>
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button type="button" className="btn btn_bdbx">
                                                                <div>로그아웃</div>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                     </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
