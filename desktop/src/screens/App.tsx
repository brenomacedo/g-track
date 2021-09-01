import React, { FC, useState } from 'react'
import Bar from '../components/Bar'
import Player from '../components/Player'
import styled from 'styled-components'
import Home from './Home'
import SideBar from '../components/Sidebar'
import Queue from './Queue'

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    .main-screen {
        display: flex;
        flex: 1;
        gap: 20px;
        overflow: hidden;
    }
`

const App: FC = () => {

    const [screen, setScreen] = useState<'home' | 'queue'>('home')

    const navigate = (screen: 'home' | 'queue') => {
        setScreen(screen)
    }

    return (
        <Container>
            <Bar />
            <div className="main-screen">
                <SideBar selected={screen} navigate={navigate} />
                {screen === 'home' ? (
                    <Home />
                ) : (
                    <Queue />
                )}
            </div>
            <Player />
        </Container>
    )
}

export default App
