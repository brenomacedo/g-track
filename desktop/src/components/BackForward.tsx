import React, { FC } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
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
    return (
        <Container>
            <FiArrowLeft className='arrow' />
            <FiArrowRight className='arrow' />
        </Container>
    )
}

export default BackFoward
