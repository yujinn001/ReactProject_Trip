import logo from './logo.svg';
import './App.css';
/*
     index.js App 호출
              함수호출 방법 => <App/> => (기존 호출 방법) App() => jsx => javascript+xml
      function Com()
      {
      }
      함수 호출 방법 => <Com/>
      1) XML 형식
         = 함수명 / 클래스명 => 첫글자는 무조건 대문자
         = 화면을 출력 => HTML (무조건 소문자)
         = HTML을 제작시에는 무조건 루트 태그가 존재해야한다
         = 트리형태
           <div> --> 이부분이 없을경우 오류!! 루트가 2개존재해서 전체를 감싸는 태그가 필요함
             <div>
              <h1></h1>
             </div>
             <div>
              <h3></h3>
             </div>
           <div>
         = 속성값은 반드시 ""
         = CSS => <a className="">
         = 일반 스타일 지정 하는 방법
           <div style="height :20px">  =>  <div style={{"height :20px"}}>
         = <img src=""> => <img :src="">(vue), <img th:src="">, <img src="${}">
           <img src={}>
         = 여는 태그와 닫는 태그가 동일
           <div>
            <img src={}> ==> 오류나는 코드 / 해결 방법 => <img src={} />
           </div>

           index.js <App/> => return값 => index.html => <div id="root"></div>

           react : MVC로 생각하면 View역할 =>  화면 출력하는 역할만 수행
           = props (고정값)
           = state (변경값)
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
