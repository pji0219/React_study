// 여러개의 배열 렌더링 하기
// UserList.js

// ver 1
import React from 'react';

function UserList() {
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

    return (
        <div>
            <div>
                <b>{users[0].username}</b> <span>({users[0].email})</span>
            </div>
            <div>
                <b>{users[1].username}</b> <span>({users[1].email})</span>
            </div>
            <div>
                <b>{users[2].username}</b> <span>({users[2].email})</span>
            </div>
        </div>
    );
}

export default UserList;


// ver 2 

import React from 'react';

function User({user}) { // 하나의 파일에 두개의 컴포넌트를 만드는거 가능
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>  
    );
}

function UserList() {
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

    return (
        <>
          <User user={users[0]}/>
          <User user={users[1]}/> 
          <User user={users[2]}/>  
        </>
    );
}

export default UserList;


// ver3
import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>  
    );
}

function UserList() {
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

    return (
        <>
          {
              users.map(
                  user => (<User user={user} key={user.id}/>) // 배열을 렌더링 할때는 키가 있어야 효율적으로 렌더링 할 수 있다.
              )
          }
        </>
    );
}

export default UserList;



// App.js
