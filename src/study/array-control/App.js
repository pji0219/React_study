import React, { useState, useRef } from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  })
  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: '1',
      username: '김소현',
      email: 'sso@gmail.com',
      active: true
    },

    {
      id: '2',
      username: '채수빈',
      email: 'chae@gmail.com',
      active: false
    },

    {
      id: '3',
      username: '유시아',
      email: 'yoo@gmail.com',
      active: false
    },
  ])

  // 값을 기억하기 위해 useRef 사용, 이후에 값이 바껴도 리렌더링 되지 않음
  const nextId = useRef(4);

  const onChange = event => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value
    });
  }

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  const onToggle = id => {
    setUsers(users.map(
      user => user.id === id 
        ? { ...user, active: !user.active }
        : user
    ))
  }

  return (
    <div>
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate} 
      />
      <UserList 
        users={users} 
        onRemove={onRemove}
        onToggle={onToggle}
      />
    </div>
  );
}

export default App;