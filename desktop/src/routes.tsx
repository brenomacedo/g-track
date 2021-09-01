import React, { FC } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import App from './screens/App'
import SplashScreen from './screens/SplashScreen'

const Routes: FC = () => {
    return (
        <HashRouter>
            <Route path='/' component={SplashScreen} exact />
            <Route path='/app' component={App} />
        </HashRouter>
    )
}

export default Routes
