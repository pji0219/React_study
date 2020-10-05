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