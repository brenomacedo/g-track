import React, { FC } from 'react'
import Bar from '../components/Bar'
import SideBar from '../components/Sidebar'
import styled from 'styled-components'
import BackFoward from '../components/BackForward'
import QueueMusic from '../components/QueueMusic'

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    .queue {
        overflow: hidden;
        display: flex;
        flex: 1;
        gap: 20px;
    }

    .queue-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: inherit;
        overflow: auto;
    }

    .top-bar {
        display: flex;
        padding: 0.5rem;
        align-items: center;
        gap: 2rem;
    }

    .top-bar h2 {
        color: white;
        font-family: 'OpenSans';
    }

    .playing-now {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        padding-right: 6rem;
    }

    .playing-now h3 {
        color: #ccc;
        font-family: 'OpenSans';
    }
`

const Queue: FC = () => {
    return (
        <Container>
            <Bar />
            <div className="queue">
                <SideBar selected='queue' />
                <div className="queue-content">
                    <div className="top-bar">
                        <BackFoward />
                        <h2>Current queue</h2>
                    </div>
                    <div className="playing-now">
                        <h3>Playing now</h3>
                        <QueueMusic />
                    </div>
                    <div className="playing-now">
                        <h3>Next in queue</h3>
                        <QueueMusic />
                        <QueueMusic />
                        <QueueMusic />
                        <QueueMusic />
                        <QueueMusic />
                        <QueueMusic />
                        <QueueMusic />
                        <QueueMusic />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Queue
