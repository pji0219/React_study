// 배열에 항목 추가하기

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
}

   return (
     <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users}/>
     </>
     );
}

export default App;



// CreateUser.js

import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
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

export default CreateUser;


// UserList.js

import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>  
    );
}

function UserList({users}) {
    return (
        <>
          {
              users.map(
                  user => (<User user={user} key={user.id} />)
                )
          }
        </>
    );
}

export default UserList;