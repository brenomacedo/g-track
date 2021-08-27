import React, { FC } from 'react'
import styled from 'styled-components'
import { FiPlay, FiX } from 'react-icons/fi'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    padding: 0.5rem 2rem;

    :hover {
        background-color: #292929;
    }

    .music-info {
        display: flex;
        gap: 2rem;
        align-items: center;
    }

    .play-icon {
        font-size: 1rem;
        color: white;
        cursor: pointer;
    }

    .pic {
        width: 3rem;
        height: 3rem;
        background-size: cover;
        background-position: center;
        background-image: url('http://localhost:3333/files/images/sh-2.jpg');
    }

    .music-names {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;

        color: white;
        font-family: 'OpenSans';
    }

    .music-options {
        display: flex;
        align-items: center;
        gap: 1rem;

        color: white;
        font-family: 'OpenSans';
    }

    .remove-icon {
        color: red;
        font-size: 1rem;
        cursor: pointer;
    }
`

const QueueMusic: FC = () => {
    return (
        <Container>
            <div className="music-info">
                <FiPlay className='play-icon' />
                <div className="pic"></div>
                <div className="music-names">
                    <h5>Promise</h5>
                    <p>Akira Yamaoka</p>
                </div>
            </div>
            <div className="music-options">
                <h5>2:25</h5>
                <FiX className='remove-icon' />
            </div>
        </Container>
    )
}

export default QueueMusic
