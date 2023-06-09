import {useState,useEffect,Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function SeoulLocationList(){
    const [seoulLocationList,setSeoulLocationList]=useState([]);
    const [curpage,setCurpage]=useState(1);
    const [totalpage,setTotalpage]=useState(0);
    const [startPage,setStartPage]=useState(0);
    const [endPage,setEndPage]=useState(0);

    useEffect(()=>{
        axios.get('http://localhost/seoul/location_list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setSeoulLocationList(response.data);
        })
    },[])

    useEffect(()=>{
        axios.get("http://localhost/seoul/location_page_react",{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        })
    },{})

    // 이벤트 처리
    const pages=(page)=>{
        axios.get('http://localhost/seoul/location_list_react',{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setSeoulLocationList(response.data);
        })

        axios.get("http://localhost/seoul/location_page_react",{
            params:{
                page:page
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        })
    }
    const pageChange=(page)=>{
        pages(page)
    }
    const pagePrev=()=>{
        pages(startPage-1)

    }

    const pageNext=()=>{
        pages(endPage+1)
    }

    let html=seoulLocationList.map((location,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter' }>
            <NavLink to={"/seoul/location_detail/"+location.no}>
                <img src={location.poster} title={location.title}/>
                <b style={{"textAlign":"center"}}>{location.title}</b>
            </NavLink>
        </li>
    )

    let row=[];
    if(startPage>1)
    {// 배열에 추가
        row.push( <li><a href="#" onClick={()=>pagePrev()}>&laquo; Previous</a></li>)
    }
    for(let i=startPage;i<=endPage;i++)
    {
        if(i==curpage)
        {
            row.push(<li className="current"><strong><a href={"#"} onClick={()=>pageChange(i)}> {i}</a></strong></li>)
        }
        else
        {
            row.push(<li><a href={"#"} onClick={()=>pageChange(i)}>{i}</a></li>)
        }
    }
    if(endPage<totalpage)
    {
        row.push(<li><a href={"#"} onClick={()=>pageNext()}>Next &raquo;</a></li>)
    }

    return (
        <Fragment>
            <div className="wrapper row3" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                <main className="hoc container clear">

                    <div className="content" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                        <div id="gallery">
                            <figure>
                                <div  style={{"textAlign":"center","fontSize":"30px"}} ><b>서울 명소</b></div>
                                <div style={{"height":"50px"}}></div>
                                <ul className="nospace clear">
                                    {html}
                                </ul>
                            </figure>
                        </div>

                        <nav className="pagination">
                            <ul>
                                {row}
                            </ul>
                        </nav>
                    </div>

                    <div className="clear"></div>
                </main>
            </div>
        </Fragment>
    )
}

export  default SeoulLocationList;