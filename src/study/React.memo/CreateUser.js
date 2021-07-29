import React from 'react';

function CreateUser({ inputs, onChange, onCreate }) {
    const { username, email } = inputs

    console.log('생성');

    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

// React.memo를 쓰면 props가 바뀌었을때만 리렌더링 된다.
export default React.memo(CreateUser);