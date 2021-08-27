import React, { FC } from 'react'
import styled from 'styled-components'

type SideBarProps = {
    selected: 'home' | 'queue'
}

const Container = styled.div`
    width: 15rem;
    height: inherit;

    display: flex;
    flex-direction: column;

    justify-content: space-between;

    .options {
        padding: 0.5rem;
    }

    .option {
        padding: 0.8rem;
        border-radius: 5px;
        font-family: 'OpenSans';
        font-weight: bold;
        color: #ccc;
        cursor: pointer;
    }

    .option.selected {
        background-color: #303030;
        color: white;
    }

    .option:hover {
        color: white;
    }

    p {
        color: white;
        font-family: 'OpenSans';
        margin-left: 0.5rem;
    }

    .playing-music {
        height: 15rem;
        margin-top: 1rem;

        background-image: url('http://localhost:3333/files/images/sh-2.jpg');
        background-position: center;
        background-size: cover;
    }
`

const SideBar: FC<SideBarProps> = ({ selected }) => {
    return (
        <Container>
            <div className='options'>
                <div className={`option ${selected === 'home' && 'selected'}`}>Início</div>
                <div className={`option ${selected === 'queue' && 'selected'}`}>Fila</div>
            </div>
            <div className="playing">
                <p>Playing now</p>
                <div className="playing-music"></div>
            </div>
        </Container>
    )
}

export default SideBar
