import React, { FC } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Home from './screens/Home'
import SplashScreen from './screens/SplashScreen'

const Routes: FC = () => {
    return (
        <HashRouter>
            <Route path='/' component={SplashScreen} exact />
            <Route path='/home' component={Home} />
        </HashRouter>
    )
}

export default Routes
