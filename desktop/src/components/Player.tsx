import React, { FC } from 'react'
import styled from 'styled-components'
import ReactSlider from 'react-slider'
import { FiShuffle, FiRepeat } from 'react-icons/fi'
import { FaStepForward, FaStepBackward, FaPlay } from 'react-icons/fa'

const Container = styled.div`
    border-top: 1px solid #323232;
    background-color: #1f1f1f;
    height: 5.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;


    .playing-now {
        display: flex;
        flex-direction: column;
    }

    .playing-now h3 {
        color: white;
        font-family: 'OpenSans';
        font-size: 0.8rem;
    }

    .playing-now p {
        color: #ccc;
        font-family: 'OpenSans';
        font-size: 0.7rem;
    }

    .player {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .player-controls {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: center;
    }

    .player-track {
        display: flex;
        flex-direction: row;
        align-items: center;

        gap: 1rem;

        color: white;
        font-family: 'OpenSans';
        font-size: 0.7rem;
    }

    .option-1 {
        color: white;
        font-size: 0.8rem;
    }

    .option-2 {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: white;
        border-radius: 30px;

        color: black;
        font-size: 0.8rem;
    }

    .pause {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: white;
        border-radius: 50px;
        color: black;
        font-size: 0.8rem;
    }
`

const PlayerSlider = styled(ReactSlider)`
    min-width: 320px;
    max-width: 480px;
    width: 80%;
    height: 5px;

    .thumb {
        width: 10px;
        height: 10px;
        border-radius: 20px;

        -webkit-box-shadow: 1px 2px 15px 0px #000000;
        box-shadow: 1px 2px 15px 0px #000000;

        background-color: white;

        transform: translateY(-25%);
        outline: none;
    }

    .track {
        background-color: #777;
        height: 5px;
        border-radius: 20px;
    }

    .track:nth-of-type(1) {
        background-color: #ddd;
        border-radius: 20px;
    }

    :hover .track:nth-of-type(1) {
        background-color: #0e4eff;
    }
`

const Player: FC = () => {
    return (
        <Container>
            <div className="playing-now">
                <h3>Promise</h3>
                <p>Akira Yamaoka</p>
            </div>
            <div className="player">
                <div className="player-controls">
                    <div className="option-1">
                        <FiShuffle />
                    </div>
                    <div className="option-2">
                        <FaStepBackward />
                    </div>
                    <div className="pause">
                        <FaPlay />
                    </div>
                    <div className="option-2">
                        <FaStepForward />
                    </div>
                    <div className="option-1">
                        <FiRepeat />
                    </div>
                </div>
                <div className="player-track">
                    <p>2:20</p>
                    <PlayerSlider thumbClassName='thumb' trackClassName='track' />
                    <p>2:45</p>
                </div>
            </div>
            <div></div>
        </Container>
    )
}

export default Player
