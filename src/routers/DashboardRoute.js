import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import MarvelScreen from '../components/marvel/MarvelScreen'
import Navbar from '../components/ui/Navbar'
import DCScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/heroes/HeroScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoute = () => {
    return (
        <>
          <Navbar />  
          <div className='container mt-3'>
              <Switch>
                  <Route exact path='/marvel' component={MarvelScreen} ></Route>
                  <Route exact path='/hero/:heroId' component={HeroScreen} ></Route>
                  <Route exact path='/dc' component={DCScreen}></Route>
                  <Route exact path='/search' component={SearchScreen}   />

                  <Redirect to='/marvel' />
              </Switch>
          </div>
        </>
    )
}

export default DashboardRoute
