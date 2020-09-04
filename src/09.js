// useRef로 컴포넌트 안의 변수 만들기

// App.js

import React, {useRef} from 'react';
import UserList from './UserList';

function App() {
  const users = [
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
];

const nextId = useRef(4); // 변수의 값을 기억 하고 싶을 때는 useRef를 사용한다. 리렌더링 되지 않는다.

const onCreate = () => {
  console.log(nextId.current);
  nextId.current += 1;
}

   return (
     <UserList users={users}/> // users 배열 전달 
     );
}

export default App;


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
                  user => (<User user={user} key={user.id}/>)
              )
          }
        </>
    );
}

export default UserList;