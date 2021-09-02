import React, { FC } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from './screens/App'
import NoConnection from './screens/NoConnection'
import SplashScreen from './screens/SplashScreen'

const Routes: FC = () => {
    return (
        <HashRouter>
            <Route path='/' component={SplashScreen} exact />
            <Route path='/app' component={App} />
            <Route path='/error' component={NoConnection} />
        </HashRouter>
    )
}

export default Routes
