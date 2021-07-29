import React, { useRef, useState } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function App() {

  const [users, setUsers] = useState([
    {
      id: 1,
      username: '김소현',
      email: 'sso@gmail.com',
      active: true
    },

    {
      id: 2,
      username: '채수빈',
      email: 'chae@gmail.com',
      active: false
    },

    {
      id: 3,
      username: '유시아',
      email: 'yoo@gmail.com',
      active: false
    }
  ]);

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;

  const nextId = useRef(4);

  const onChange = event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    })

  }

  const onCreate = () => {
    const newUser = {
      id: nextId.current,
      username,
      email,
      active: false
    }

    setUsers(users.concat(newUser));

    nextId.current += 1;
    setInputs({
      username: '',
      email: ''
    });
  }

  const onToggle = id => {
    setUsers(users.map(user => (
      user.id === id
        ? { ...user, active: !user.active }
        : user
    )));
  }

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate} />
      <UserList
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
}

export default App;