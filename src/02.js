// props

import React from 'react'; 

function Hello(props) { /* 값을 받아와서 사용하고 싶으면 함수에 파라미터에 props를 넣어주면 된다.
                            props에는 우리가 넣어준 값들이 객체 형태로 들어가 있다. */

    return <div style={{ // 자바스크립트 값이니깐 중괄호를 두번 감싼다.
        color: props.color
    }}>안녕하세요!{props.name}</div>; /* props의 객체 형태로 들어간 값을 JSX내부에서 렌더링 하려면 저렇게
                                                {} 감싸준뒤 하면 된다. */ 
}

Hello.defaultProps = { // Props 값을 모르고 안써줬을 때 기본값 지정
    name: '이름없음'
};

export default Hello;

import React from 'react'; 

function Hello(color, name) { // 비구조화 할당으로 작성 해줄 수도 있다.

    return <div style={{color}}>안녕하세요!{name}</div>; 

}

Hello.defaultProps = { // Props 값을 모르고 안써줬을 때 기본값 지정
    name: '이름없음'
};

export default Hello; 

 // App.js
 import React from 'react';
 import Hello from './Hello';
 function App() {
   return (
     <div>
       <Hello name="react" color="blue"/> {/* hello 컴포넌트에게 리액트와 파란색 값 전달 */}
     </div>
   );
 }

export default App;



// props children

// props children : 컴포넌트 안에 있는 어떤 값을 조회할 때 사용

import React from 'react';

function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };
    return<div style={style}>{children}</div>
}

export default Wrapper;

// App.js
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
function App() {
  return (
    <Wrapper> {/* Wrapper로 감싸주면 자동으로 임포트 된다. */}
      <Hello name="react" color="blue"/> {/* hello 컴포넌트에게 리액트와 파란색 값 전달 */}
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;