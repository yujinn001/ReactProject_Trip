import {useState,useEffect} from "react";
import axios from "axios";

function NewsList(){
    const [newsList,setNewsList]=useState([]) ;//상수형 변수 -> 메모리 공간을 한개만 가진다
    const [title,setTitle]=useState('서울') //'제주'
    useEffect(()=>{
        axios.get("http://localhost/news/news_list_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    },[])
    const dataChange=(e)=>{
        setTitle(e.target.value)
    }
    const dataKeyDown=(e)=>{
        if(e.keyCode==13) {
            axios.get("http://localhost/news/news_list_react", {
                params: {
                    title: title
                }
            }).then(response => {
                console.log(response.data)
                setNewsList(response.data)
            })
        }
    }
    const findData=()=>{
        axios.get("http://localhost/news/news_list_react",{
            params:{
                title:title
            }
        }).then(response=>{
            console.log(response.data)
            setNewsList(response.data)
        })
    }
    let html=newsList.map((news)=>
        <table className={"table"}>
            <tr>
                <td><a href={news.link} target={"_blank"}> <b><h3 style={{"color":"#715aa5","margin-bottom":"10px","margin-top":"10px","textAlign":"left"}}  dangerouslySetInnerHTML={{__html:news.title}}></h3></b></a></td>
                <td  style={{"padding-top":"10px","padding-bottom":"10px"}}>{news.pubDate}</td>
            </tr>
            <tr>
                <td colSpan={"2"} dangerouslySetInnerHTML={{__html:news.description}}></td>
            </tr>
        </table>
    )
    return(
        <div className="wrapper row3">
            <main className="hoc container clear"  style={{"textAlign":"center"}}>

                <div className="content">

                    {/*입력창*/}
                    <header className="heading inline" style={{"fontFamily":"TAEBAEKmilkyway"}}>
                        <input type={"text"} size={"15"} className={"input-sm"} style={{"height":"40px"}}
                               onChange={dataChange} value={title} onKeyDown={dataKeyDown}/>
                        <input type={"button"} value={"검색"}
                               className={"btn btn-sm "} style={{"height":"40px"}} onClick={findData}/>
                    </header>
                    <table className={"table"}>
                        <tbody>
                           <tr>
                             <td>
                                 {html}
                             </td>
                           </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    )
}

export default NewsList