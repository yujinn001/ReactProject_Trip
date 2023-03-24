import {useEffect,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function FoodFind(){
    const [ss,setSs]=useState('제주')
    const [fdata,setFdata]=useState([]);
    const [curpage,setCurpage]=useState(1)
    const [totalpage,setTotalpage]=useState(0)
    useEffect(()=>{
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    },[])
    const dataChange=(e)=>{
        setSs(e.target.value)

    }
    const dataKeyDown=(e)=>{
        setCurpage(1)
        if(e.keyCode==13)
        {
            axios.get("http://localhost/jeju/food_find_react",{
                params:{
                    page:curpage,
                    title:ss
                }
            }).then(response=>{
                console.log(response.data)
                setFdata(response.data)
                setCurpage(response.data[0].curpage)
                setTotalpage(response.data[0].totalpage)
            })
        }
    }
    const findData=()=>{
        //alert(ss)
        setCurpage(1)
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
            setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    }
    const prev=()=>{
        const page=curpage>1?curpage-1:curpage
        setCurpage(page)
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
        })
    }
    const next =()=>{
        const page=curpage<totalpage?curpage+1:curpage
        setCurpage(page)
        axios.get("http://localhost/jeju/food_find_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setFdata(response.data)
        })
    }
    let html=fdata.map((food,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <NavLink to={"/jeju/food_detail/"+food.no} style={{"textDecoration":"none"}}>
                <img src={food.poster} title={food.title}/>
                <b>{food.title}</b>
            </NavLink>
        </li>
    )
    return (
        <div className="wrapper row3">
            <main className="hoc container clear"  style={{"textAlign":"center"}}>

                <div className="content">
                    <header className="heading inline" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                        <input type={"text"} size={"15"} className={"input-sm"} style={{"height":"40px"}}
                               onChange={dataChange} value={ss} onKeyDown={dataKeyDown}/>
                        <input type={"button"} value={"검색"}
                               className={"btn btn-sm "} style={{"height":"40px"}} onClick={findData}/>
                    </header>
                    <div style={{"height":"20px"}}></div>
                    <div id="gallery">
                        <figure>

                            <ul className="nospace clear" style={{"color": "#715aa5"}}>
                                {html}
                            </ul>

                        </figure>
                    </div>
                    <div className={"text-center"} style={{"textAlign":"center","fontFamily":"TAEBAEKmilkyway"}}>
                        <button className={"btn btn-sm "} onClick={prev}>이전</button>&nbsp;
                        <b>{curpage} page / {totalpage}pages</b>&nbsp;
                        <button className={"btn btn-sm "} onClick={next}>다음</button>
                    </div>

                </div>

                <div className="clear"></div>
            </main>
        </div>
    )
}
export default FoodFind