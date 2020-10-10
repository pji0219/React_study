// 프롭스 칠드런 : 컴포넌트 안에 있는 어떤 값을 조회할 때 사용

import React from 'react';

function Wrapper({children}) {
    const style = {
        border: '2px solid black',
        padding: 16
    };
    return<div style={style}>{children}</div>
}

export default Wrapper;