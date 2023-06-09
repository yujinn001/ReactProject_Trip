import {useState,useEffect} from "react";
import {NavLink} from "react-router-dom";
/*
      1. 메모리 할당
      2. componentWillMount()
      3. componentDidMount() = mount : 가상 메모리 (가상돔)
      ==============================  데이터를 서버로부터 읽기
         => useEffect() : 내용 갱신
      4. render() => 화면 출력
      5. componentWillUpdate()
      6. componentDidUpdate()
          => setXxx  : 내용 갱신
      6-1. render()
      7. componentWillDestory()
      8. componentDidDestory()
      
      ==> props / state : 변경이 가능한 데이터
          ===== 호출시 전송 : 불변
      ==> 리액트는 데이터 상태 관리 프로그램
      ==> class / function => 지역변수 => 유지하는 변수 (useState()) => Hooks
          ===== 멤버변수 설정이 가능
 */
// <Header/> => return 값을 읽어서 => index.html
function Header(props){
    return (
        <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">
                    <h1 className="logoname"><NavLink to={"/"}> 서울여행</NavLink></h1>
                </div>
                <nav id="mainav" className="fl_right">
                    <ul className="clear">
                        <li className="active"><a href="index.html">Home</a></li>
                        
                        <li><a className="drop" href="#">서울여행</a>
                            <ul>
                                <li><a href="pages/gallery.html">명소</a></li>
                                <li><a href="pages/full-width.html">자연/관광</a></li>
                                <li><a href="pages/full-width.html">쇼핑</a></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">맛집</a>
                            <ul>
                                <li><a href="pages/gallery.html">명소</a></li>
                                <li><a href="pages/full-width.html">자연/관광</a></li>
                                <li><a href="pages/full-width.html">쇼핑</a></li>
                            </ul>
                        </li>
                        <li><a className="drop" href="#">레시피</a>
                            <ul>
                                <li><NavLink to={"/recipe/recipe_list"}>레시피</NavLink></li>
                                <li><a href="pages/full-width.html">쉐프</a></li>
                            </ul>
                        </li>
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export  default  Header;