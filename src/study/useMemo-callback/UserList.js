import React, { useEffect } from 'react';

const User = React.memo(function User({ username, email, id, onRemove, active, onToggle, user }) {

    useEffect(() => {
        // 뎁스 배열에 값을 설정하면 그 값이 업데이트 될 때 마다
        // useEffect에서 props로 받아온 값을 참조하거나
        // useState로 관리하고 있는 값을 참조하는 경우에는 뎁스 배열에 넣어줘야 한다.
        console.log('유저 값이 설정 됨');
        console.log(user);

        // 컴포넌트가 마운트 될 때
        // console.log('컴포넌트가 화면에 나타남');
        // props -> state
        // REST API
        // D3, video.js
        // setInterval, setTimeout

        return () => {
            // 컴포넌트가 언마운트 될 때
            // console.log('컴포넌트가 화면에서 사라짐');
            // clearInterval, clearTimeout
            // 라이브러리 인스턴스 제거

            // 뎁스에 값이 설정된 경우라면 업데이트 되기 직전에
            console.log('유저 값이 바뀌기 전');
            console.log(user);

        }
    }, [user]);

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    );
});

function UserList({ users, onRemove, onToggle }) {

    return (
        <>
            {users.map(user => (
                <User
                    key={user.id}
                    username={user.username}
                    email={user.email}
                    onRemove={onRemove}
                    id={user.id}
                    active={user.active}
                    onToggle={onToggle}
                    user={user}
                />
            ))}
        </>
    );
}

export default React.memo(UserList);