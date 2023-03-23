import {Component, useState, useEffect, Fragment} from "react";
import {useParams} from "react-router";
import axios from "axios";
import {NavLink} from "react-router-dom";
function FoodList(props){
    let {cno}=useParams()
    const  [foodList,setFoodList]=useState([])
    const  [cateInfo,setCateInfo]=useState({})
    useEffect(()=>{
        axios.get("http://localhost/food/food_list_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setFoodList(response.data)
        })
        axios.get("http://localhost/food/category_info_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            setCateInfo(response.data)
        })
    },[])
    // for(FoodVO vo:list)
    let html=foodList.map((food)=>
        <table class="table">
            <tr>
                <td className="text-center" width="30%" rowspan="4">
                    <NavLink to={"/food/food_detail/"+food.fno}>
                        <img src={food.poster} style={{"width": "320px","height": "150px"}} className="img-rounded"/>
                    </NavLink>
                </td>
                <td width="70%"><NavLink to={"/food/food_detail/"+food.fno}><span>{food.name}</span></NavLink>&nbsp;<span style={{"color":"orange"}}>{food.score}</span></td>
            </tr>
            <tr>
                <td width="70%">{food.address}</td>
            </tr>
            <tr>
                <td width="70%">{food.tel}</td>
            </tr>
            <tr>
                <td width="70%">{food.type}</td>
            </tr>
        </table>
    )
    return (
        <Fragment>
            <div className="jumbotron">
                <h3 className="text-center">{cateInfo.title}></h3>
                <h4 className="text-center">{cateInfo.subject}</h4>
            </div>
            <div class="row">
                <table class="table">
                    <tr>
                        <td>
                            {html}
                        </td>
                    </tr>
                </table>
            </div>
        </Fragment>
    )

}
export default FoodList;