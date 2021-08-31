import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { FiPlay, FiX } from 'react-icons/fi'
import usePlayer from '../hooks/usePlayer'

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

type MusicProps = {
    music: Music
}

const Container = styled.div<{ background: string, open: boolean }>`
    width: 14rem;
    height: 19rem;
    background-color: #1f1f1f;
    border-radius: 3px;
    padding: 1rem;
    cursor: pointer;
    transition: background-color 0.5s;
    position: relative;

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
        background-image: url('http://localhost:3333/files/images/${props => props.background}.jpg');
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
        font-size: 0.8rem;
    }

    h3 {
        margin-top: 10px;
        font-size: 0.9rem;
    }

    .menu {
        width: 14rem;
        height: ${props => props.open ? '19' : '0'}rem;
        position: absolute;

        overflow: hidden;
        transition: height 0.3s;

        left: 0;
        top: 0;

        background-color: #1f1f1f;
        border-radius: 3px;

        z-index: 1;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        cursor: initial;
    }

    .menu-option {
        color: white;
        font-family: 'OpenSans';
        font-size: 1.1rem;
        text-align: center;
        padding: 0.5rem 0;
        cursor: pointer;
        transition: background-color 0.3s;
        width: 14rem;
    }

    .menu-option:hover {
        background-color: #272727;
    }

    .close-button {
        width: 2.5rem;
        height: 2.5rem;
        background-color: #ff3434;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;

        margin-bottom: 30px;
        cursor: pointer;
        transition: background-color 0.3s;
    }

    .close-button:hover {
        background-color: red;
    }

    .close-icon {
        color: white;
        font-size: 1rem;
    }
`

const Music: FC<MusicProps> = ({ music }) => {

    const { addToQueue, playNow } = usePlayer()
    const [showMenu, setShowMenu] = useState(false)

    const openMenu = () => {
        if(showMenu) return
        setShowMenu(true)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }

    const handlePlayNow = () => {
        playNow(music)
        closeMenu()
    }

    const handleAddToQueue = () => {
        addToQueue(music)
        closeMenu()
    }

    return (
        <Container background={music.image} open={showMenu} onClick={openMenu}>
            <div className="menu">
                <div className="menu-options">
                    <div className="menu-option" onClick={handlePlayNow}>Play now</div>
                    <div className="menu-option" onClick={handleAddToQueue}>Add to queue</div>
                </div>
                <div className="close-button" onClick={closeMenu}>
                    <FiX className='close-icon' />
                </div>
            </div>
            <div className="pic">
                <div className='play'>
                    <FiPlay className='play-icon' />
                </div>
            </div>
            <h3>{music.name}</h3>
            <p>{music.author.name}</p>
        </Container>
    )
}

export default Music
