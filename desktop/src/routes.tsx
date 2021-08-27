import React, { FC } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import Queue from './screens/Queue'
import SplashScreen from './screens/SplashScreen'

const Routes: FC = () => {
    return (
        <HashRouter>
            <Route path='/' component={SplashScreen} exact />
            <Route path='/home' component={Home} />
            <Route path='/queue' component={Queue} />
        </HashRouter>
    )
}

export default Routes
