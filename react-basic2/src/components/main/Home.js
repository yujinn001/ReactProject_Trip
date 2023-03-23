import {Component,Fragment} from "react";
import axios from "axios";
import {NavLink} from "react-router-dom";
class Home extends Component{
    constructor(props) {
        super(props);
        this.state={
            cate_list1:[],
            cate_list2:[],
            cate_list3:[]
        }
    }
    componentDidMount() {
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:1
            }
        }).then(response=>{
            this.setState({cate_list1:response.data})
        })
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:2
            }
        }).then(response=>{
            this.setState({cate_list2:response.data})
        })
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:3
            }
        }).then(response=>{
            this.setState({cate_list3:response.data})
        })
    }

    render() {
        // 화면 출력하는 위치
        const html1=this.state.cate_list1.map(cate=>
            <div className="col-md-3">
                <div className="thumbnail">
                    <NavLink to={"/food/food_list/"+cate.cno}>
                        <img src={cate.poster} style={{"width":"100%"}}/>
                            <div className="caption">
                                <p>{cate.title}</p>
                                <p>{cate.subject}</p>
                            </div>
                    </NavLink>
                </div>
            </div>
        )
        const html2=this.state.cate_list2.map(cate=>
            <div className="col-md-4">
                <div className="thumbnail">
                    <NavLink to={"/food/food_list/"+cate.cno}>
                        <img src={cate.poster} style={{"width":"100%"}}/>
                        <div className="caption">
                            <p>{cate.title}</p>
                            <p>{cate.subject}</p>
                        </div>
                    </NavLink>
                </div>
            </div>
        )
        const html3=this.state.cate_list3.map(cate=>
            <div className="col-md-3">
                <div className="thumbnail">
                   <NavLink to={"/food/food_list/"+cate.cno}>
                        <img src={cate.poster} style={{"width":"100%"}}/>
                        <div className="caption">
                            <p>{cate.title}</p>
                            <p>{cate.subject}</p>
                        </div>
                   </NavLink>
                </div>
            </div>
        )
        return (
            <Fragment>
                <h3>믿고 보는 맛집 리스트</h3>
                <hr/>
               <div className={"row"}>
                   {html1}
               </div>
                <h3>지역별 인기 맛집 리스트</h3>
                <hr/>
                <div className={"row"}>
                    {html2}
                </div>
                <h3>메뉴별 인기 맛집 리스트</h3>
                <hr/>
                <div className={"row"}>
                    {html3}
                </div>
            </Fragment>    
        )
    }
}

export default Home;