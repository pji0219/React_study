// 커스텀 훅 만들기

// useInputs.js

import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm); // form이라는 상태를 만드는데 그 초기 값은 파라미터로 가져온 initialForm
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({
            ...form,
            [name]: value
        }));
    }, []);
    const reset = useCallback( () => setForm(initialForm), [initialForm]); // form을 리셋하는 함수 setForm의 파라미터는 초기값을 받아온 것을 설정해주겠다.

    return [form, onChange, reset]; // 3가지를 반환, 객체 형태로 써줘도 된다.
};

export default useInputs;



// App.js

import React, {useRef, useReducer, useMemo, useCallback} from 'react';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import useInputs from './components.useInputs';

function countActiveUsers (users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}


const initialState = {
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
  switch(action.type) {
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
        users: state.users.filter(user => user.id !== action.id)
      };
    default:
      throw new Error('Unhandeled action');
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [form, onChange, reset] = useInputs({ // form: 상태, onChange:이벤트, reset:초기화 함수
    username:'', // 초기값
    email:'',
  });
  const { username, email } = form;
  const nextId = useRef(4);
  const {users} = state;
  
  

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email,
      }
    });
    nextId.current+= 1;
    reset(); // 리셋 함수 호출
  }, [username, email, reset]) //

  const onToggle = useCallback( id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, [])

  const onRemove = useCallback( id => {
    dispatch({
      type: 'REMOVE_USER',
      id 
    });
  },[])

  const count = useMemo( () => countActiveUsers(users), [users] )
 
   return (
     <>
        <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
        <UserList users={users} onToggle={onToggle} onRemove={onRemove}  />
   <div>활성 사용자 수: {count}</div>
     </>
    );
}

export default App;