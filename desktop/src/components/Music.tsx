import React, { FC } from 'react'
import styled from 'styled-components'
import { FiPlay } from 'react-icons/fi'

const Container = styled.div`
    width: 14rem;
    height: 19rem;
    background-color: #1f1f1f;
    border-radius: 3px;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.5s;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    :hover {
        background-color: #272727;
    }

    :hover .play {
        bottom: 0.3rem;
        opacity: 1;
    }

    .pic {
        background-position: center;
        background-size: cover;
        background-image: url('http://localhost:3333/files/images/sh-4.jpg');
        padding-bottom: 100%;
        border-radius: 15px;
        -webkit-box-shadow: 1px 2px 15px 0px #000000;
        box-shadow: 1px 2px 15px 0px #000000;

        position: relative;
    }

    .play {
        position: absolute;
        bottom: -0.3rem;
        right: 0.3rem;

        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50px;
        background-color: #1466ff;
        -webkit-box-shadow: 1px 2px 15px 0px #000000;
        box-shadow: 1px 2px 15px 0px #000000;
        opacity: 0;

        transition: 0.3s;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .play-icon {
        color: white;
        font-size: 1rem;
    }

    p {
        color: #ccc;
        font-family: 'OpenSans';
    }

    h3 {
        margin-top: 10px;
    }
`

const Music: FC = () => {
    return (
        <Container>
            <div className="pic">
                <div className='play'>
                    <FiPlay className='play-icon' />
                </div>
            </div>
            <h3>Room of Angel</h3>
            <p>Akira Yamaoka</p>
        </Container>
    )
}

export default Music
