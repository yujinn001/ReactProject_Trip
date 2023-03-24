import {Fragment, useEffect, useState} from "react";
import axios from "axios";

function Home(){
    const [foodTop,setFoodTop]=useState([]);
    const [junsiTop,setJunsiTop]=useState([])
    const [seoullocationTop,setSeoulLocationTop]=useState([])
    //  서버 연결 후 데이터 읽기
    useEffect(()=>{
        axios.get("http://localhost/food/food_top3").then(response=>{
            console.log(response.data)
            setFoodTop(response.data)
        })
        axios.get("http://localhost/junsi/junsi_top3").then(response=>{
            console.log(response.data)
            setJunsiTop(response.data)
        })
        axios.get("http://localhost/seoul/location_top3").then(response=>{
            console.log(response.data)
            setSeoulLocationTop(response.data)
        })
    },[])
    let html1=foodTop.map((food)=>
        <li className="one_third">
            <article>
                <a href="#"><img src={food.poster} style={{"width":"100%","height":"200px"}}/></a>
                <h6 className="heading" style={{"fontFamily":"TAEBAEKmilkyway"}}>{food.name}</h6>
                <p>{food.address}</p>

            </article>
        </li>
    )
    let html2=seoullocationTop.map((location)=>
        <li className="one_third">
            <article>
                <a href="#"><img src={location.poster} style={{"width":"100%","height":"200px"}}/></a>
                <h6 className="heading" style={{"fontFamily":"TAEBAEKmilkyway"}}>{location.title}</h6>
                <p>{location.address}</p>

            </article>
        </li>
    )

    let html3=junsiTop.map((junsi)=>
        <li className="one_third">
            <article>
                <a href="#"><img src={junsi.poster} style={{"width":"100%","height":"400px"}}/></a>
                <h6 className="heading" style={{"fontFamily":"TAEBAEKmilkyway"}}>{junsi.title}</h6>
                <p>{junsi.loc}</p>

            </article>
        </li>
    )
    return (
        <Fragment>
            <div className="bgded " style={{"backgroundImage":"url('images/demo/backgrounds/seoul.png')"}}>
                <div id="pageintro" className="hoc clear">
                     <article>
                        <h3 className="heading">Seoul Trip</h3>
                        <p>Seoul is the capital of the Republic of Korea and was formerly the capital of Baekje and Joseon. It was called Wirye Castle, Hansan, Hansung, Hanyang, Yangju, Nanjing, and Gyeongseong depending on the times.Origins of the name</p>
                     </article>
                 </div>
            </div>


            <div className="bgded" style={{"backgroundColor": "white","fontFamily":"TAEBAEKmilkyway"}}>
                <section id="services" className="hoc container clear" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                   <h1 className="heading" style={{"fontFamily":"TAEBAEKmilkyway","textAlign":"center","fontSize":"40px","fontWeight":"bolder"}}>맛집 추천</h1>
                    <ul className="nospace group elements elements-three" >

                        {html1}
                    </ul>
                </section>
            </div>

            <div className="bgded" style={{"backgroundColor": "white","fontFamily":"TAEBAEKmilkyway"}}>
                <section id="services" className="hoc container clear" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                    <h1 className="heading" style={{"fontFamily":"TAEBAEKmilkyway","textAlign":"center","fontSize":"40px","fontWeight":"bolder"}}>명소 추천</h1>
                    <ul className="nospace group elements elements-three" >

                        {html2}
                    </ul>
                </section>
            </div>

            <div className="bgded" style={{"backgroundColor": "white","fontFamily":"TAEBAEKmilkyway"}}>
                <section id="services" className="hoc container clear" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                    <h1 className="heading" style={{"fontFamily":"TAEBAEKmilkyway","textAlign":"center","fontSize":"40px","fontWeight":"bolder"}}>전시회</h1>
                    <ul className="nospace group elements elements-three" >

                        {html3}
                    </ul>
                </section>
            </div>
        </Fragment>
    )
}
export  default Home;