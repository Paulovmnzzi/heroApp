import React, { useContext } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import AuthContext from '../auth/AuthContext'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoute from './DashboardRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

    const { user:{logged} } = useContext(AuthContext)


    return (

        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute exact path='/login' component={LoginScreen}  isAuthenticated={logged} />
                    <PrivateRoute path='/' component={DashboardRoute} isAuthenticated={logged} />
                </Switch>
            </div>
        </BrowserRouter>

    )
}

export default AppRouter
