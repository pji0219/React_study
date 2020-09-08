// 배열에 있는 항목 삭제 하기

// UserList.js

import React from 'react';

function User({user, onRemove}) {
    const {username, email, id} = user;
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
            <button onClick={() => onRemove(user.id)}>삭제</button> {/* 함수를 호출해 버리면 안되고 반드시 호출하는 함수를 넣어줘야함 */}
        </div>  
    );
}

function UserList({users, onRemove}) {
    return (
        <>
          {
              users.map(
                  user => (
                        <User 
                            user={user}
                            key={user.id} 
                            onRemove={onRemove} 
                        />
                    )
              )
          }
        </>
    );
}

export default UserList;



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
        email: 'progaramexplorer@naver.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@gmail.com'
    },
    {
       id: 3,
       username: 'liz',
       email: 'liz@daum.net' 
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

   return (
     <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onRemove={onRemove}/>
     </>
     );
}

export default App;