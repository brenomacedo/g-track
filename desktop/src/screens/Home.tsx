import React, { FC } from 'react'
import Bar from '../components/Bar'
import SideBar from '../components/Sidebar'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    .home {
        display: flex;
        flex: 1;
    }
`

const Home: FC = () => {
    return (
        <Container>
            <Bar />
            <div className="home">
                <SideBar selected='home' />
            </div>
        </Container>
    )
}

export default Home
