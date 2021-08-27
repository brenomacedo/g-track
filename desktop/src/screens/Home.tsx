import React, { FC } from 'react'
import Bar from '../components/Bar'
import SideBar from '../components/Sidebar'
import styled from 'styled-components'
import { FiSearch, FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const Container = styled.div`
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    .home {
        display: flex;
        flex: 1;
    }

    .home-content {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .top-bar {
        display: flex;
        padding: 0.5rem;
        align-items: center;
        gap: 2rem;
    }

    .search {
        position: relative;
    }

    .search-icon {
        color: black;
        font-size: 1rem;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
    }

    .search-input {
        width: 20rem;
        border-radius: 150px;
        font-family: 'OpenSans';
        font-weight: bold;
        border: 0;
        outline: none;
        padding: 10px;
        padding-left: 45px;
    }

    .back-forward {
        display: flex;
        gap: 1rem;
    }

    .arrow {
        font-size: 2rem;
        color: #ccc;
        cursor: pointer;
    }

    .arrow:hover {
        color: white;
    }
`

const Home: FC = () => {
    return (
        <Container>
            <Bar />
            <div className="home">
                <SideBar selected='home' />
                <div className="home-content">
                    <div className="top-bar">
                        <div className="back-forward">
                            <FiArrowLeft className='arrow' />
                            <FiArrowRight className='arrow' />
                        </div>
                        <div className="search">
                            <input type="text" className="search-input" placeholder='Search a music' />
                            <FiSearch className='search-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Home
