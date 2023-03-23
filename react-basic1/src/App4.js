import {Component,Fragment} from "react";
import axios from "axios";

class App4 extends Component{
    constructor(props) {
        super(props);
        // Vue data:{} 
        // 멤버 변수 설정 =>  state
        // 이벤트 등록
        this.state={
            category:[],
            cno:1
        }
    }
    buttonClick(cno)
    {
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:cno
            }
        }).then(response=>{
            console.log(response.data)
            this.setState({category:response.data})
            // setState를 쓰게 되면 render 재호출 (데이터 변경)
        })
    }
    componentDidMount() {
        // 데이터 가져오기
        //let _this=this;  => then(response=>{ } 작성하게 되면 this가 바뀌지않아 _this를 선언할 필요가 없음
        axios.get("http://localhost/food/category_react",{
            params:{
                cno:this.state.cno
            }
        }).then(response=>{
            console.log(response.data)
            this.setState({category:response.data})
            // setState를 쓰게 되면 render 재호출 (데이터 변경)
        })
    }
    render() {
        const html=this.state.category.map(cate=>
            <div className="col-md-4">
                <div className="thumbnail">
                     <img src={cate.poster} alt="Lights" style={{"width":"100%"}}/>
                         <div className="caption">
                             <p>{cate.title}</p>
                         </div>
                </div>
            </div>
        )
        return (
            <Fragment>
                <div className={"row"}>
                    <div className={"text-center"} >
                        <input type={"button"} value={"믿고보는 맛집 리스트"}
                               className={"btn btn-lg btn-success"} style={{"marginLeft":"5px"}}
                                onClick={this.buttonClick.bind(this,1)}
                        />

                        <input type={"button"} value={"지역별 맛집 리스트"}
                               className={"btn btn-lg btn-info"}  style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,2)}
                        />
                        <input type={"button"} value={"메뉴별 맛집 리스트"}
                               className={"btn btn-lg btn-primary"} style={{"marginLeft":"5px"}}
                               onClick={this.buttonClick.bind(this,3)}
                        />
                    </div>
                    <div style={{"height":"20px"}}></div>
                    <div className={"row"}>
                        {html}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export  default  App4;