import React, { Component } from 'react';

class ClassCounter extends Component {

    handleIncrease() { // state로 사용하기 위한 커스텀 메서드를 만들수 있음
        console.log('increase');
    }

    handleDecrease() {
        console.log('decrease');
    }

    render() {
        return (
            <div>
                <h1>0</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
            </div>
        );
    }
}

export default ClassCounter;