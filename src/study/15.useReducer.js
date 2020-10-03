// useReducer 기초
// 상태관리를 하는 또 다른 방법으로 컴포넌트 밖에서 상태 관리를 하는 함수를 만들어 상태관리를 함

// Counter.js

import React, {useReducer} from 'react';

// useReducer를 사용하려면 reducer 함수를 만들어줘야한다.
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT': // 액션이 인크리먼트일 때 +1 시킴
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            throw new Error('Unhandled action'); // 둘다 아닐 때 기본 값으로 에러 발생 시킴
    }
}

function Counter() {
    const [number, dispatch] = useReducer(reducer, 0); // number는 현재상태 dispatch는 보내다라는 의미를 가지고 있고 여기에서는 액션을 발생시킨다고 이해하면 된다.
    // useReducer 훅의 첫번째 파라미터는 reducer함수 두번째는 기본값, 시작할 때는 0이고 액션이 발생함에 따라 바뀐다.

    const onIncrease = () => {
        dispatch({
            type: 'INCREMENT' // 이렇게 작동 시킴
        })
    };
      const onDecrease = () => {
        dispatch({
            type: 'DECREMENT'
        })
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;