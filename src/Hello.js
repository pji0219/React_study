import React from 'react'; 

function Hello({color, name, isSpecial}) {

    return (
        <div style={{
            color
        }}>
            {isSpecial ? <b>*</b> : null} {/* 삼항 연산자 사용 */}
            안녕하세요!{name}
        </div>
    );

}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello; 