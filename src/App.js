// App.js
import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
function App() {
   return (
     <Wrapper>
       <Hello name="react" color="blue" isSpecial={true}/> {/* 자바스크립트 값이라서 { }를 써 주어야함 */}
       <Hello color="pink"/>
     </Wrapper>
    );
}

export default App;