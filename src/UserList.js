import React from 'react';

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {user.username}
            </b> 
            <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button> {/* 함수를 호출해 버리면 안되고 반드시 호출하는 함수를 넣어줘야함 */}
        </div>  
    );
}

function UserList({users, onRemove, onToggle}) {
    return (
        <>
          {
              users.map(
                  user => (
                        <User 
                            user={user}
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle} 
                        />
                    )
              )
          }
        </>
    );
}

export default UserList;