import {useState, useEffect} from "react";

const usePersistState = (initialState?: any) => {
    const [state, setState] = useState(localStorage.getItem('store') ? JSON.parse(localStorage.getItem('store') || '') : initialState);

    const onChangeState = (value: any) => {
        setState((prevState: any) => ({...prevState, ...value}))
        localStorage.setItem('store', JSON.stringify({...state, ...value}));
    }

    useEffect(() => {
        const persistedState = localStorage.getItem('store') && JSON.parse(localStorage.getItem('store') || '');

        if(!persistedState) {
            setState((prevState: any) => ({...prevState, ...persistedState}));
        }
    }, []);

    return [state, onChangeState];
}

export default usePersistState;