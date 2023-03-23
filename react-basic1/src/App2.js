import {Component,Fragment} from "react"; // react안에 있는 Component,Fragment를 가져오겠다

class App2 extends Component{
    // 속성값을 보내고 받을 때 => props를 사용
    constructor(props) {
        super(props);
        // Vue data:{}
        this.state={
            vo:{}
        }
        // 이벤트 등록 (이벤트 처리시 this를 써야한다)
        //this.movieClick= this.movieClick.bind(this)
    }
    movieClick(m){ // 값 넣는 곳
        this.setState({vo:m})
    }
    render() {
        // 화면 UI => 화면을 만드는 위치 => HTML 작성
        // map => 역할 : foreach문
        const html=this.props.movie.map((m)=>
            <tr onClick={this.movieClick.bind(this,m)}>
                <td className={"text-center"}>{m.rank}</td>
                <td className={"text-center"}>
                  <img src={'https://www.kobis.or.kr/'+m.thumbUrl} style={{"width":"30px","height":"30px"}}/>
                </td>
                <td>{m.movieNm}</td>
                <td className={"text-center"}>{m.genre}</td>
                <td className={"text-center"}>{m.director}</td>
                <td className={"text-center"}>{m.watchGradeNm}</td>
            </tr>
        )
        return (
            <Fragment>
            <div className={"col-sm-7"}>
                <table className={"table"}>
                    <thead>
                     <tr>
                         <th className={"text-center"}>순위</th>
                         <th className={"text-center"}></th>
                         <th className={"text-center"}>영화명</th>
                         <th className={"text-center"}>장르</th>
                         <th className={"text-center"}>감독</th>
                         <th className={"text-center"}>등급</th>
                     </tr>
                    </thead>
                    <tbody>
                    {html}
                    </tbody>
                </table>
            </div>
            <div className={"col-sm-5"}>
               <Detail movie={this.state.vo}/>
            </div>
            </Fragment>
        )
    }
}
class Detail extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div>
                <h1 className={"text-center"}>영화 상세</h1>
                <table className={"table"}>
                    <tbody>
                      <tr>
                        <td width={"30%"} className={"text-center"} rowSpan={"7"}>
                            <img src={'https://www.kobis.or.kr/'+this.props.movie.thumbUrl} style={{"width":"100%"}}/>
                        </td>
                        <td colSpan={"2"}>{this.props.movie.movieNm}</td>
                      </tr>
                      <tr>
                        <td width={"20%"}>감독</td>
                          <td width={"50%"}>{this.props.movie.director}</td>
                      </tr>
                      <tr>
                          <td width={"20%"}>장르</td>
                          <td width={"50%"}>{this.props.movie.genre}</td>
                      </tr>
                      <tr>
                          <td width={"20%"}>등급</td>
                          <td width={"50%"}>{this.props.movie.watchGradeNm}</td>
                      </tr>
                      <tr>
                          <td width={"20%"}>배급사</td>
                          <td width={"50%"}>{this.props.movie.dtNm}</td>
                      </tr>
                      <tr>
                          <td width={"20%"}>순위</td>
                          <td width={"50%"}>{this.props.movie.rank}</td>
                      </tr>
                      <tr>
                          <td colSpan={"3"}>{this.props.movie.synop}</td>
                      </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}
export default  App2;























