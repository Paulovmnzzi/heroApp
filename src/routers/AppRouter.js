import React, { useContext } from 'react'
import { HashRouter, Switch } from 'react-router-dom'
import AuthContext from '../auth/AuthContext'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoute from './DashboardRoute'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {

    const { user:{logged} } = useContext(AuthContext)


    return (

        <HashRouter>
            <div>
                <Switch>
                    <PublicRoute exact path='/login' component={LoginScreen}  isAuthenticated={logged} />
                    <PrivateRoute path='/' component={DashboardRoute} isAuthenticated={logged} />
                </Switch>
            </div>
        </HashRouter>

    )
}

export default AppRouter
