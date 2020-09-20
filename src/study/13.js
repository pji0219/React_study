// useEffect를 사용하여 마운트 언마운트 업데이트 시 할 작업 설정 하기

// UserList.js
import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        // pros -> state
        // REST API
        // D3, Video.js
        // setInterval, setTimeout
        return () => { // 여기서 return이 클리어 함수
            // clearInterval,clearTimeout
            // 라이브러리 인스턴스 제거 
            console.log('컴포넌트가 화면에서 사라짐');
        };
    }, []);
    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button> {/* 함수를 호출해 버리면 안되고 반드시 호출하는 함수를 넣어줘야함 */}
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

// 2
import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);
        return () => {
            console.log('user 값이 바뀌기 전');
            console.log(user);
        }
    }, [user]);
    return (
        <div>
            <b 
                style={{
                    color: active ? 'green' : 'black',
                    cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button> {/* 함수를 호출해 버리면 안되고 반드시 호출하는 함수를 넣어줘야함 */}
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



// App.js

import React, {useRef, useState} from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

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