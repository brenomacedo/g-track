import React, { FC , useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import ReactSlider from 'react-slider'
import { FiShuffle, FiRepeat, FiVolume2 } from 'react-icons/fi'
import { FaStepForward, FaStepBackward, FaPlay, FaPause } from 'react-icons/fa'
import usePlayer from '../hooks/usePlayer'
import formatTime from '../functions/formatTime'

const Container = styled.div`
    border-top: 1px solid #323232;
    background-color: #1f1f1f;
    height: 5.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem;


    .current-music {
        display: flex;
        flex-direction: column;
        width: 120px;
    }

    .current-music h3 {
        white-space: nowrap;
        color: white;
        font-family: 'OpenSans';
        font-size: 0.8rem;
    }

    .current-music p {
        color: #ccc;
        font-family: 'OpenSans';
        font-size: 0.7rem;
        white-space: nowrap;
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

        user-select: none;
    }

    .option-1 {
        font-size: 0.8rem;
        color: white;
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

    .audio {
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .microphone {
        color: white;
        font-size: 1.3rem;
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

const AudioSlider = styled(PlayerSlider)`
    min-width: 100px;
    max-width: 120px;
    width: 80%;
    height: 5px;
`

const Player: FC = () => {

    const { playing, removeCurrentMusic, shuffle } = usePlayer()

    const [isPlaying, setIsPlaying] = useState(true)
    const [currentProgress, setCurrentProgress] = useState(0)
    const [formatedCurrentTime, setFormatedCurrentTime] = useState('0:00')
    const [formatedDuration, setFormatedDuration] = useState('0:00')
    const [currentVolume, setCurrentVolume] = useState(100)
    const [isRepeating, setIsRepeating] = useState(false)

    const playerRef = useRef<HTMLAudioElement>(null)

    const changeVolume = (e: number) => {
        if(playerRef.current.volume || playerRef.current.volume === 0) {
            playerRef.current.volume = e / 100
        }
        setCurrentVolume(e)
    }

    const togglePlay = () => {
        setIsPlaying(!isPlaying)

        if(isPlaying) {
            playerRef.current?.pause()
            return
        }

        playerRef?.current.play()
    }

    const changeValue = (e: number) => {
        if(playerRef.current.duration) {
            playerRef.current.currentTime = playerRef.current?.duration * e /100
        }
    }

    const toggleRepeat = () => {
        setIsRepeating(!isRepeating)
    }

    useEffect(() => {
        setIsPlaying(true)
    }, [playing])

    useEffect(() => {

        const onLoadedMetadata = () => {
            setFormatedCurrentTime(formatTime(playerRef.current?.currentTime))
            setFormatedDuration(formatTime(playerRef.current?.duration))
        }

        const onTimeUpdate = () => {
            setCurrentProgress(playerRef.current?.currentTime * 100 / playerRef.current?.duration)
            setFormatedCurrentTime(formatTime(playerRef.current?.currentTime))
        }

        playerRef.current.addEventListener('loadedmetadata', onLoadedMetadata)
        playerRef.current.addEventListener('timeupdate', onTimeUpdate)

        return () => {
            playerRef.current.removeEventListener('loadedmetadata', onLoadedMetadata)
            playerRef.current.removeEventListener('timeupdate', onTimeUpdate)
        }

    }, [])

    useEffect(() => {

        const onEnded = () => {

            if(!isRepeating) {
                removeCurrentMusic()
                return
            }

            playerRef.current.currentTime = 0
            playerRef.current.play()
        }

        playerRef.current.addEventListener('ended', onEnded)

        return () => {
            playerRef.current.removeEventListener('ended', onEnded)
        }

    }, [isRepeating])

    return (
        <Container>
            <div className="current-music">
                <h3>{playing?.name}</h3>
                <p>{playing?.author.name}</p>
            </div>
            <div className="player">
                <div className="player-controls">
                    <div className="option-1">
                        <FiShuffle onClick={shuffle} />
                    </div>
                    <div className="option-2">
                        <FaStepBackward />
                    </div>
                    <div className="pause" onClick={togglePlay}>
                        {isPlaying ? (
                            <FaPause />
                        ) : (
                            <FaPlay />
                        )}
                    </div>
                    <div className="option-2">
                        <FaStepForward />
                    </div>
                    <div className="option-1">
                        <FiRepeat onClick={toggleRepeat}
                            color={isRepeating ? '#346aff' : 'white'} />
                    </div>
                </div>
                <div className="player-track">
                    <p>{formatedCurrentTime}</p>
                    <PlayerSlider value={currentProgress} onChange={changeValue}
                        thumbClassName='thumb' trackClassName='track' min={0} max={100} />
                    <p>{playing ? formatedDuration : '0:00'}</p>
                </div>
                <audio autoPlay
                    ref={playerRef} src={`http://localhost:3333/files/audios/${playing?.url}.mp3`} />
            </div>
            <div className="audio">
                <FiVolume2 className='microphone' />
                <AudioSlider onChange={changeVolume}
                    min={0} max={100} value={currentVolume} />
            </div>
        </Container>
    )
}

export default Player
