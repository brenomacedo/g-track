import React, { FC } from 'react'
import Bar from '../components/Bar'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
`

const Home: FC = () => {
    return (
        <Container>
            <Bar />
        </Container>
    )
}

export default Home
