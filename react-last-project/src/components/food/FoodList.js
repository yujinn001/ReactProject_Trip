import {useState,useEffect,Fragment} from "react";
import axios from "axios";
function FoodList(){
    const [foodList,setFoodList]=useState([]);
    const [curpage,setCurpage]=useState(1);
    const [totalpage,setTotalpage]=useState(0);
    const [startPage,setStartPage]=useState(0);
    const [endPage,setEndPage]=useState(0);

    useEffect(()=>{
        axios.get('http://localhost/jeju/food_list_react',{
            params:{
                page:curpage
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data);
        })
    },[])
    let html=foodList.map((food,index)=>
        <li className={index%4==0?'one_quarter first':'one_quarter' }>
            <a href="#">
              <img src={food.poster} title={food.title}/>
            </a>
        </li>
    )
    return (
        <Fragment>
        <div className="wrapper row3">
            <main className="hoc container clear">

                <div className="content">
                    <div id="gallery">
                        <figure>
                            <header className="heading"><b>제주 맛집</b></header>
                            <ul className="nospace clear">
                                {html}
                            </ul>
                        </figure>
                    </div>

                    <nav className="pagination">
                        <ul>
                            <li><a href="#">&laquo; Previous</a></li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><strong>&hellip;</strong></li>
                            <li><a href="#">6</a></li>
                            <li className="current"><strong>7</strong></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#">9</a></li>
                            <li><strong>&hellip;</strong></li>
                            <li><a href="#">14</a></li>
                            <li><a href="#">15</a></li>
                            <li><a href="#">Next &raquo;</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="clear"></div>
            </main>
        </div>
        </Fragment>
    )
}

export  default FoodList;