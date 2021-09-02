import React, { FC , useState, useEffect } from 'react'
import { FiWifiOff } from 'react-icons/fi'
import styled from 'styled-components'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
    height: 100vh;
    background-color: #ff2d2d;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    color: white;
    font-family: 'OpenSans';

    .wifi {
        font-size: 5rem;
    }

    .connection-button {
        background-color: #ffffff;
        color: #ff2d2d;
        width: 8rem;
        height: 2.5rem;
        border-radius: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        outline: none;
        cursor: pointer;
    }
`

const NoConnection: FC = () => {

    const [trying, setTrying] = useState(false)

    const { push } = useHistory()

    const tryAgain = () => {
        if(trying) {
            return
        }

        setTrying(true)

        toast.promise(axios.get('http://api.github.com'), {
            pending: 'Trying to estabilish connection!',
            error: 'No connection with internet!',
            success: 'Connected successfully with internet!'
        }).then(() => {
            setTrying(false)
            push('app')
        }).catch(() => {
            setTrying(false)
        })

    }

    const quit = () => {
        window.api.send('close')
    }

    useEffect(() => {
        tryAgain()
    }, [])

    return (
        <Container>
            <FiWifiOff className='wifi' />
            <p>No connection with internet</p>
            <button className='connection-button' onClick={tryAgain}>Try again</button>
            <button className='connection-button' onClick={quit}>Quit</button>
        </Container>
    )
}

export default NoConnection
