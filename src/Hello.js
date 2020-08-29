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