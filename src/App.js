import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
function App() {
  return (
    <Wrapper>
      <Hello name="react" color="blue"/> {/* hello 컴포넌트에게 리액트와 파란색 값 전달 */}
      <Hello color="pink"/>
    </Wrapper>
  );
}

export default App;
