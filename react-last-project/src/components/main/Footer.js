import {useState,useEffect} from "react";
import {Fragment} from "react";

function Footer(){
    return (
        <Fragment>
        <div className="bgded overlay row4" style={{"backgroundImage":"url('images/demo/backgrounds/01.png')"}}>
            <footer id="footer" className="hoc clear">

                <div className="one_third first">
                    <h6 className="heading">오늘의 뉴스</h6>
                    <ul className="nospace linklist">
                        <li><a href="#">Sagittis leo morbi quis</a></li>
                        <li><a href="#">Nulla vehicula felis laoreet</a></li>
                        <li><a href="#">Pulvinar proin et eros ac</a></li>
                        <li><a href="#">Mi vulputate accumsan fusce</a></li>
                        <li><a href="#">At massa in sed tortor sit amet</a></li>
                    </ul>
                </div>
                <div className="one_third">
                    <h6 className="heading">오늘의 제주 맛집 Top9</h6>
                    <ul className="nospace clear latestimg">
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                    </ul>
                </div>
                <div className="one_third">
                    <h6 className="heading">오늘의 레시피 Top9</h6>
                    <ul className="nospace clear latestimg">
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                        <li><a className="imgover" href="#"><img src="images/demo/100x100.png" alt=""/></a></li>
                    </ul>
                </div>
             </footer>
        </div>
        <div className="wrapper row5">
          <div id="copyright" className="hoc clear">
            <p className="fl_left">Copyright &copy; 2023-03-23 - react - <a href="#">김유진</a></p>
            <p className="fl_right">Product by <a  href="https://github.com/yujinn001/React/">Git Address</a></p>
          </div>
        </div>
        </Fragment>
    )
}

export  default Footer;