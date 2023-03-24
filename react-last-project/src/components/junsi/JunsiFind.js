import {useEffect,useState} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";

function JunsiFind(){
    const [ss,setSs]=useState('서울')
    const [junsidata,setJunsidata]=useState([]);
    const [curpage,setCurpage]=useState(1);
    const [totalpage,setTotalpage]=useState(0);
    const [startPage,setStartPage]=useState(0);
    const [endPage,setEndPage]=useState(0);

    useEffect(()=>{
        axios.get("http://localhost/seoul/jusi_find_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setJunsidata(response.data)
           setCurpage(response.data[0].curpage)
            setTotalpage(response.data[0].totalpage)
        })
    },[])
    useEffect(()=>{
        axios.get("http://localhost/seoul/jusi_find_page_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        })
    },{})
    const dataChange=(e)=>{
        setSs(e.target.value)

    }
    const dataKeyDown=(e)=>{
        setCurpage(1)
        if(e.keyCode==13)
        {
            axios.get("http://localhost/seoul/jusi_find_react",{
                params:{
                    page:curpage,
                    title:ss
                }
            }).then(response=>{
                console.log(response.data)
                setJunsidata(response.data)
                setCurpage(response.data[0].curpage)
                setTotalpage(response.data[0].totalpage)
            })
        }
    }

    const pages=(page)=>{
        axios.get('http://localhost/seoul/jusi_find_page_react',{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setJunsidata(response.data);
        })

        axios.get("http://localhost/seoul/jusi_find_page_react",{
            params:{
                page:page,
                title:ss
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
    const findData=()=>{
        //alert(ss)
        setCurpage(1)
        axios.get("http://localhost/seoul/jusi_find_react",{
            params:{
                page:curpage,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setJunsidata(response.data)
            setTotalpage(response.data.totalpage)
            setCurpage(response.data.curpage)
            setStartPage(response.data.startPage)
            setEndPage(response.data.endPage)

        })
    }
    /*const prev=()=>{
        const page=curpage>1?curpage-1:curpage
        setCurpage(page)
        axios.get("http://localhost/seoul/jusi_find_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setJunsidata(response.data)
        })
    }
    const next =()=>{
        const page=curpage<totalpage?curpage+1:curpage
        setCurpage(page)
        axios.get("http://localhost/seoul/jusi_find_react",{
            params:{
                page:page,
                title:ss
            }
        }).then(response=>{
            console.log(response.data)
            setJunsidata(response.data)
        })
    }*/
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

    let html=junsidata.map((junsi,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter'}>
            <NavLink to={"/seoul/junsi_detail/"+junsi.geno} style={{"textDecoration":"none"}}>
                <img src={junsi.poster} title={junsi.title}/>
                <b>{junsi.title}</b>
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
                    <nav className="pagination">
                        <ul>
                            {row}
                        </ul>
                    </nav>

                </div>

                <div className="clear"></div>
            </main>
        </div>
    )
}
export default JunsiFind;