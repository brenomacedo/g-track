import React, { FC } from 'react'
import styled from 'styled-components'
import { FiPlay, FiX } from 'react-icons/fi'

type Author = {
    id: number
    name: string
}

type Game = {
    id: number
    name: string
}

type Music = {
    id: number
    name: string
    url: string
    image: string
    author: Author
    game: Game
}

type QueueMusicProps = {
    music: Music
}

const Container = styled.div<{ pic: string }>`
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    padding: 0.5rem 2rem;

    :hover {
        background-color: #292929;
    }

    :nth-of-type(1) {
        margin-top: 1rem;
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
        background-image: url('http://localhost:3333/files/images/${props => props.pic}.jpg');
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

const QueueMusic: FC<QueueMusicProps> = ({ music }) => {
    return (
        <Container pic={music.image}>
            <div className="music-info">
                <FiPlay className='play-icon' />
                <div className="pic"></div>
                <div className="music-names">
                    <h5>{music.name}</h5>
                    <p>{music.author.name}</p>
                </div>
            </div>
            <div className="music-options">
                <FiX className='remove-icon' />
            </div>
        </Container>
    )
}

export default QueueMusic
