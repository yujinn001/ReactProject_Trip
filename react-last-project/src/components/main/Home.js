import {Fragment, useEffect, useState} from "react";
import axios from "axios";

function Home(){
    const [foodTop,setFoodTop]=useState([]);
    //  서버 연결 후 데이터 읽기
    useEffect(()=>{
        axios.get("http://localhost/food/food_top6").then(response=>{
            console.log(response.data)
            setFoodTop(response.data)
        })
    },[])
    let html=foodTop.map((food)=>
        <li className="one_third" >
            <article><a href="#"><img src={food.poster} style={{"width":"100%","height":"200px"}}/></a>
                <h6 className="heading">{food.name}</h6>
                <p>{food.address}</p>

            </article>
        </li>
    )
    return (
        <Fragment>
            <div className="bgded overlay" style={{"backgroundImage":"url('images/demo/backgrounds/seoul.png')"}}>
                <div id="pageintro" className="hoc clear">
                     <article>
                        <h3 className="heading">Seoul Trip</h3>
                        <p>Seoul is the capital of the Republic of Korea and was formerly the capital of Baekje and Joseon. It was called Wirye Castle, Hansan, Hansung, Hanyang, Yangju, Nanjing, and Gyeongseong depending on the times.Origins of the name</p>
                     </article>
                 </div>
            </div>
            <div className="wrapper row3" style={{"height":"200px","backgroundColor":"white"}}>
                <main className="hoc container clear">
                    <section id="introblocks">
                        <ul className="nospace group btmspace-80 elements elements-four">
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-hand-rock"></i></a>
                                    <h6 className="heading">오늘의 날씨</h6>
                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-dove"></i></a>
                                    <h6 className="heading">오늘의 뉴스</h6>
                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-history"></i></a>
                                    <h6 className="heading">추천 여행</h6>
                                </article>
                            </li>
                            <li className="one_quarter">
                                <article><a href="#"><i className="fas fa-heartbeat"></i></a>
                                    <h6 className="heading">추천 맛집</h6>
                                </article>
                            </li>
                        </ul>
                    </section>

                    <div className="clear"></div>
                </main>
            </div>

            <div className="bgded overlay light" style={{"backgroundImage":"url('https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg')"}}>
                <section id="services" className="hoc container clear">

                    <ul className="nospace group elements elements-three" >
                        {html}
                    </ul>
                </section>
            </div>
        </Fragment>
    )
}
export  default Home;