// 조건부 렌더링 : 특정 조건이 참이냐 거짓이냐에 따라서 다른 결과를 보여주는것

// Hello.js
import React from 'react'; 

function Hello({color, name, isSpecial}) {

    return (
        <div style={{
            color
        }}>
            {isSpecial ? <b>*</b> : null} {/* 삼항 연산자 사용, 이 코드 처럼 조건에 따라 보여주고 
            안보여주는 경우에는 또다른 방법으로는 && 연산자를 사용하는 것이 더 코드가 깔끔할 수 있다. (isSpecial && <b>*</b> */}
            안녕하세요!{name}
        </div>
    );

}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello; 

// App.js
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
function App() {
    return (
     <Wrapper>
       <Hello name="react" color="blue" isSpecial={true}/> {/* 자바스크립트 값이라서 { }를 써 주어야함, 값을 지정 하지 않으면 true로 간주*/}
       <Hello color="pink"/>
     </Wrapper>
   );
}

export default App;