import React, { FC } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    gap: 1rem;

    .arrow {
        font-size: 2rem;
        color: #ccc;
        cursor: pointer;
    }

    .arrow:hover {
        color: white;
    }
`

const BackFoward: FC = () => {

    const { goForward, goBack } = useHistory()

    return (
        <Container>
            <FiArrowLeft className='arrow' onClick={goBack} />
            <FiArrowRight className='arrow' onClick={goForward} />
        </Container>
    )
}

export default BackFoward
