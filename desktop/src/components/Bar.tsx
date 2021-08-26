import React, { FC } from 'react'
import styled from 'styled-components'
import { FiSquare, FiX, FiMinus } from 'react-icons/fi'

declare global {
    interface Window {
        api: {
            send: (channel: string, data?: Record<string, unknown>) => unknown,
            receive: (channel: string,
                callback: (e: Electron.IpcRendererEvent, ...args: unknown[]) => void) => void
        }
    }
}


const Container = styled.div`
    height: 20px;
    background-color: #311b92;

    display: flex;

    .move {
        user-select: none;
        -webkit-app-region: drag;

        color: white;

        display: flex;
        justify-content: center;
        flex: 1;
    }

    .move p {
        line-height: 20px;
        font-size: 12px;
    }
`

const Options = styled.div`

    display: flex;

    .option {
        height: 20px;
        width: 30px;
        cursor: pointer;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .close {
        background-color: #ef5350;
    }

    .close:hover{
        background-color: #b71c1c;
    }

    .option:not(.close):hover {
        background-color: #7e57c2;
    }
`

const Bar: FC = () => {

    const minimize = () => {
        window.api.send('minimize')
    }

    const resize = () => {
        window.api.send('resize')
    }

    const close = () => {
        window.api.send('close')
    }

    return (
        <Container>
            <div className='move'>
                <p>gtrack</p>
            </div>
            <Options>
                <div className='option' onClick={minimize}>
                    <FiMinus color='white' size={14} />
                </div>
                <div className='option' onClick={resize}>
                    <FiSquare color='white' size={14} />
                </div>
                <div className='option close' onClick={close}>
                    <FiX color='white' size={14} />
                </div>
            </Options>
        </Container>
    )
}

export default Bar
