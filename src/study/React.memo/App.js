import React, { useRef, useState, useMemo, useCallback } from 'react';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active === true).length;
}

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

  const onChange = useCallback(event => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value
    })

  }, [inputs]);

  const onCreate = useCallback(() => {
    const newUser = {
      id: nextId.current,
      username,
      email,
      active: false
    }

    // setUsers([...users, newUser]);
    setUsers(users => users.concat(newUser));

    nextId.current += 1;
    setInputs({
      username: '',
      email: ''
    });
  }, [username, email]);

  const onToggle = useCallback(id => {
    setUsers(users => users.map(user => (
      user.id === id
        ? { ...user, active: !user.active }
        : user
    )));
  }, []);

  const onRemove = useCallback(id => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  // 뎁스안에 있는 값이 바껴야 값을 새로 연산함
  // users가 바뀔때만 함수를 호출하고 그렇지 않은 경우에는 이전 값을 재사용함
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser
        inputs={inputs}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList
        users={users}
        onToggle={onToggle}
        onRemove={onRemove}
      />
      <span>활성 사용자 수:{count}</span>
    </div>
  );
}

export default App;