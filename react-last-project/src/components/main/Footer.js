import {useState,useEffect} from "react";
import {Fragment} from "react";
import axios from "axios";

function Footer(){
    const [newsTop,setNewsTop]=useState([]);
    const [foodTop6,setFoodTop6]=useState([])
    useEffect(()=>{
        axios.get("http://localhost/news/news_Top5_react").then(response=>{
            console.log(response.data)
            setNewsTop(response.data)
        })
        axios.get("http://localhost/food/food_top6").then(response=>{
            console.log(response.data)
            setFoodTop6(response.data)
        })
    },[])
    let html1=newsTop.map((news)=>
          <li><a href="#">{news.title}</a></li>
    )
    let html2=foodTop6.map((food)=>
        <li><a className="imgover" href="#"><img src={food.poster} style={{"width":"100%","height":"150px"}}/></a></li>
    )
    return (
        <Fragment>
        <div className="bgded overlay row4" style={{"backgroundColor":"#715aa5","fontFamily":"TAEBAEKmilkyway"}}>
            <footer id="footer" className="hoc clear">

                <div className="one_half first">
                    <h6 className="heading"  style={{"fontFamily":"TAEBAEKmilkyway"}}>오늘의 뉴스</h6>
                    <ul className="nospace linklist">
                        {html1}
                    </ul>
                </div>
                <div className="one_half">
                    <h6 className="heading"  style={{"fontFamily":"TAEBAEKmilkyway"}}>오늘의 맛집 Top6</h6>
                    <ul className="nospace clear latestimg">
                        {html2}
                    </ul>
                </div>

             </footer>
        </div>
        <div className="wrapper row5" style={{"fontFamily":"TAEBAEKmilkyway"}}>
          <div id="copyright" className="hoc clear">
            <p className="fl_left">Copyright &copy; 2023-03-23 - react - <a href="#">김유진</a></p>
            <p className="fl_right">Product by <a  href="https://github.com/yujinn001/React/">Git Address</a></p>
          </div>
        </div>
        </Fragment>
    )
}

export  default Footer;