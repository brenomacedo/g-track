import React, { FC } from 'react'
import usePlayer from '../hooks/usePlayer'
import styled from 'styled-components'
import QueueMusic from '../components/QueueMusic'

const Container = styled.div`


    flex: 1;
    display: flex;
    flex-direction: column;
    height: inherit;
    overflow: auto;


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

    .no-music-playing {
        display: flex;
        align-items: center;
        height: 4rem;
        color: white;
        font-family: 'OpenSans';
    }
`

const Queue: FC = () => {

    const { playing, queue } = usePlayer()

    const renderQueue = () => {
        if(queue.length === 0) {
            return <div className='no-music-playing'>No musics in queue</div>
        }
        return queue.map((music, index) => {
            return <QueueMusic music={music} qindex={index} />
        })
    }

    return (
        <Container>
            <div className="top-bar">
                <h2>Current queue</h2>
            </div>
            <div className="playing-now">
                <h3>Playing now</h3>
                {playing ? (
                    <QueueMusic music={playing} />
                ) : (
                    <div className='no-music-playing'>No music playing</div>
                )}
            </div>
            <div className="playing-now">
                <h3>Next in queue</h3>
                {renderQueue()}
            </div>
        </Container>
    )
}

export default Queue
