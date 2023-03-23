import {Component,Fragment} from "react"; //react 라이브러리에 있는 Component를 사용하겠다
// Class형태, Function 형식 (state => Hooks)
class  App1 extends Component{ // 컴포넌트(한 개의 기능)를 개발한다
    constructor(props) {
        super(props); // 생성자 (생성자는 자동호출 된다)
        /*
             1. 변수 선언
             2. 이벤트 등록
         */
    }
    componentDidMount() {
        // VueJS -> mounted:function() => axios (데이터 가져올 경우)사용
    }
    // <App1 /> => render() => return값을 받는다 => #root.innerHTML
    render() {
        // 화면 UI => 화면을 만드는 위치 => HTML 작성
        return ( // 괄호는 항상 옆에 위치시킨다
            // 루트를 임시로 묶어준다(Fragment) ! => div를 사용하지않는 이유는 css가 깨질 가능성이 높아
            <Fragment>
            <div>
                 <h1 style={{"color":"red"}}>Hello React</h1>
                 <h3>Hello React</h3>
                <h1>Hello React</h1>
                <h3>Hello React</h3>
                <h1>Hello React</h1>
                <h3>Hello React</h3>
            </div>
            <div>
                <h1>Hello React</h1>
                <h3>Hello React</h3>
                <h1>Hello React</h1>
                <h3>Hello React</h3>
                <h1>Hello React</h1>
                <h3>Hello React</h3>
            </div>
            </Fragment>
        )
    }
}

export  default  App1; // 끝나면 App1을 등록한다
