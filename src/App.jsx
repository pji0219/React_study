import React from 'react';
import './App.css';
import Card from './UI-practice/Card';

function App() {
  return (
    <div className="App">
      <Card
        title="오마이걸 유아"
        imageUrl="https://img.etoday.co.kr/pto_db/2020/04/20200425215055_1453170_557_667.jpg"
        body="그리드 카드 만들기 실습 입니다."
      />
    </div>
  );
}

export default App;
