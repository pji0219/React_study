import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) { // 상태관리
        super(props);
        this.state = { // 상태, state의 형태는 무조건 객체 형태여야 한다.
            counter: 0 // 초기값
        };
    }

    handleIncrease = () => { // state로 사용하기 위한 커스텀 메서드를 만들수 있음, 화살표 함수로 해야 이벤트로 연결 해줄때 인스턴스와 this가 안 끊김
        this.setState({ // 상태를 바꾸기 위한 함수
            counter: this.state.counter + 1 // counter 현재값에 +1
        });
    }

    handleDecrease = () => {
       this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}

export default ClassCounter;