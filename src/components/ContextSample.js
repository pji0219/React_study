import React, { createContext, useContext } from 'react';

const MyContext = createContext('defaulValue'); // Provider 값을 설정하지 않았을 때 Context에서 기본적으로 사용할 값을 넣어줄수 있다. 여기서는 defaulValue 이것을 넣었음

function Child() {
    const text = useContext(MyContext); // useContext는 context에 있는 값을 읽어와서 사용할 수 있게 해주는 훅이다.
    return <div>안녕하세요? {text}</div>
}

function Parent() {
    return <Child/>
}

function GrandParent() {
    return <Parent/>
}

function ContextSample() {
    return (
        <MyContext.Provider value="GOOD"> {/* MyContext 안의 Provider 컴포넌트를 사용해서 값을 지정해주면 된다. */}
            <GrandParent/>   
        </MyContext.Provider>
    )
}

export default ContextSample;