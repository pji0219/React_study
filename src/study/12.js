// 배열의 항목 수정 하기


// App.js

import React, {useRef, useState} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'progaramexplorer',
        email: 'progaramexplorer@naver.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@gmail.com',
        active: false
    },
    {
       id: 3,
       username: 'liz',
       email: 'liz@daum.net',
       active: false 
    }
]);

const nextId = useRef(4);

const onCreate = () => {
  const user = {
    id: nextId.current,
    username,
    email,
  };
  setUsers([...users,user]);
  setInputs({
    username: '',
    email: ''
  });
  nextId.current += 1;
};

const onRemove = id => {
  setUsers(users.filter(user => user.id !== id));
};

const onToggle = id => {
  setUsers(users.map(
    user => user.id === id
    ? {...user, active: !user.active}
    : user
  ));
};

   return (
     <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
     </>
     );
}

export default App;



// UserList.js

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