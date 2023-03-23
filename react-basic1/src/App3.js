import {Component,Fragment} from "react";
import App2 from "./App2";

class App3 extends Component{
    // 속성값을 보내고 받을 때 => props를 사용
    constructor(props) {
        super(props);
    }

    render() {
        const html=this.props.movie2.map((m)=>
          <tr>
              <td className={"text-center"}>{m.rank}</td>
              <td className={"text-center"}>
                  <img src={'https://www.kobis.or.kr/'+m.thumbUrl} style={{"width":"30px","height":"30px"}}/>
              </td>
              <td className={"text-center"}>{m.movieNm}</td>
              <td className={"text-center"}>{m.genre}</td>
              <td className={"text-center"}>{m.director}</td>
              <td className={"text-center"}>{m.watchGradeNm}</td>
          </tr>
        )
        return (
            <div className={"row"}>
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
        )
    }
}

export default  App3; // 끝나면 App3을 등록한다