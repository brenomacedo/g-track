import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import * as animationData from '../animations/loading.json'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Contaienr = styled.div`
    min-height: 100vh;
    background-color: #212121;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .logo {
        width: 12rem;
        height: 12rem;
        background-image: url('static://images/logo.png');
        background-size: contain;
    }
`

const SplashScreen: FC = () => {

    const { push } = useHistory()

    useEffect(() => {
        axios.get('http://api.github.com').then(() => {
            push('app')
        }).catch(() => {
            push('error')
        })
    })

    return (
        <Contaienr>
            <div data-aos='fade-down' className='logo' />
            <Lottie options={{
                animationData,
                autoplay: true,
                loop: true
            }} width={200} />
        </Contaienr>
    )
}

export default SplashScreen
