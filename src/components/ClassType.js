import React, { Component } from 'react';

class ClassType extends Component { // Component를 상속 받아야 하고
    static defaultProps = {
        name: '이름없음',
    };

    render() { // render 메서드를 작성해줘야 하고
        const { color, isSpecial, name } = this.props;
        return ( // jsx를 반환 시켜주면 된다.
            <div style={{ color }}>
                {isSpecial && <b>*</b>}
                안녕하세요 {name}
            </div>
        );
    }
}

export default ClassType;