// userState로 바뀌는 값 관리 하기

// App.js

import React from 'react';
import Counter from './Counter';
function App() {
   return (
     <Counter/>
     );
}

export default App;


// Counter.js

import React, {useState} from 'react'; // 동적인 상태로 하려면 useStats 함수를 불러와 줘야 한다.

function Counter() {
    const [number, setNumber] = useState(0); // 넘버라는 상태를 만들건데 그 기본값을 0으로 하겠다, 셋넘버는 이 상태를 바꿔주는 함수

    const onIncrease = () => {
        setNumber(number + 1);
    };
      const onDecrease = () => {
        setNumber(number - 1);
    };
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button> {/* 함수를 호출하면 안되고 이름만 넣어줘야한다. */}
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter;