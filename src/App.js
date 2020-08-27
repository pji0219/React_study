import React from 'react';
import Hello from './Hello'; // Hello 컴포넌트 불러옴 확장자 js는 생략해도 됨
function App() {
  return (
    <div>
      <Hello/> {/* 컴포넌트 사용 */}
      <Hello/>
      <Hello/>
    </div>
  );
}

export default App;
