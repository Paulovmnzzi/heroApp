import React, { useContext } from 'react'
import { types } from './../../types/types';
import AuthContext from '../../auth/AuthContext';

const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const action = {
        type: types.login,
        payload:{ name:'Paulo'}
    }

    const handleLogin = () => {

        dispatch(action);

        history.replace('/');

    }   




    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/> 

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            > Ingresar </button>

        </div>
    )
}

export default LoginScreen
