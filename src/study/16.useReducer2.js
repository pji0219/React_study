// App에서 userReducer 사용하기

// App.js

import React, {useRef, useMemo, useCallback, useReducer} from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';

function countActiveUsers (users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}


const initialState = { // App 컴포넌트에서 사용할 초기상태를 컴포넌트 밖에 만든다.
    inputs: {
        username: '',
        email: '',  
    },
    users: [
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
    ]
}

function reducer(state, action) { 
    switch (action.type) {
        case 'CHANGE_INPUT':
            return {
                ...state, // 불변성을 지켜주기 위한 것
                inputs: { // inputs 값을 덮어씀
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'CREATE_USER':
             return {
                    inputs: initialState.inputs,
                    users: state.users.concat(action.user)
                };
        case 'TOGGLE_USER':
            return {
                ...state,
                users: state.users.map(user =>
                    user.id === action.id
                    ? { ...user, active: !user.active }
                    : user
                )
            };
        case 'REMOVE_USER':
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id) // id가 일치하는건 삭제하고 일치하지 않는건 남겨둠
            }
        default:
            throw new Error('Unhandled action');
    }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState); // 두번째 파라미터 초기값, state 안에는 users와 input이 들어있다.
    const nextId = useRef(4);
    const { users} = state; // 그것을 비구조화 할당
    const {username, email} = state.inputs; // state안에 inputs안에 username, email
    
    const onChange = useCallback(e => { // 여기서 e는 수정하게 됬을 때 발생하는 이벤트 객체
        const { name, value } = e.target; // 이벤트 객체에 있는 키와 값을 추출해옴
        dispatch({
            type: 'CHANGE_INPUT',
            name,
            value
        })
    }, []);

    const onCreate = useCallback(() => {
        dispatch({
            type: 'CREATE_USER',
            user: {
                id: nextId.current,
                username,
                email,
            } 
        });
        nextId.current += 1;
    }, [username, email]);

    const onToggle = useCallback(id => {
        dispatch({
            type: 'TOGGLE_USER',
            id
        });
    }, []);
    
    const onRemove = useCallback(id => {
        dispatch({
            type: 'REMOVE_USER',
            id
        });
    }, []);

    const count = useMemo( () => countActiveUsers(users), [users] )

   return (
     <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
        <UserList users={users} onToggle={onToggle} onRemove={onRemove}  />
        <div>활성 사용자 수: {count}</div>
     </>
    );
}

export default App;