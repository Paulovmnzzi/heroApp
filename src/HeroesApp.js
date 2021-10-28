import React, { useEffect, useReducer } from 'react'
import AppRouter from './routers/AppRouter'
import AuthContext from './auth/AuthContext';
import AuthReducer from './auth/AuthReducer';
// import { Redirect } from 'react-router';

const init = ({history}) => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false }       //Va a buscar del Local Storage si existe user, y si existe lo parseará a JSON
    //en el caso de que no exista devolverá un objeto que contiene logged: false
    
}

const HeroesApp = () => {

    const [user, dispatch] = useReducer(AuthReducer, {}, init)  //[RETURN, DISPATCH] = useReducer(EL REDUCER,  UN INITIAL STATE, UNA INICIALIZACION)
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (

        <AuthContext.Provider value={{ user, dispatch }}>       {/*  el user y el dispatch son mandados a AppRouter, es decir, a toda la aplicación  */}
            <AppRouter /> 
        </AuthContext.Provider>
    )
}

export default HeroesApp
