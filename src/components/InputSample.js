import React, { useState, useRef } from 'react';

function InputSample() {
    // 여러 인풋을 관리할 때 객체형태로 상태를 만들어주면 좋다.
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;

    const onChange = (event) => {
        const { name, value } = event.target;

        // []로 감싸면 name 값에 따라 키 값이 바뀜
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });

        // current가 돔을 가리키게 됨
        nameInput.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                placeholder="이름"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                type="text"
                name="nickname"
                placeholder="닉네임"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;