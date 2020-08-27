// 리액트 컴포넌트
// 컴포넌트는 일종의 UI 조각
import React from 'react'; // 리액트를 불러와서 사용하겠다는 의미

function Hello() { /* 컴포넌트는 클래스와 함수 2가지 형태로 만들 수 있는데 여기서는 함수로 만듦
                      컴포넌트 이름의 앞글자는 대문자로 해줘야함 */
    return <div>안녕하세요!</div>;
}

export default Hello; // Hello라는 컴포넌트를 내보내겠다는 의미