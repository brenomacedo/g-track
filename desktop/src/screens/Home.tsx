import React, { FC } from 'react'
import Bar from '../components/Bar'
import SideBar from '../components/Sidebar'
import BackFoward from '../components/BackForward'
import Music from '../components/Music'
import styled from 'styled-components'
import { FiSearch } from 'react-icons/fi'
import Player from '../components/Player'
import usePlayer from '../hooks/usePlayer'

const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;

    .home {
        display: flex;
        flex: 1;
        gap: 20px;
        overflow: hidden;
    }

    .home-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        height: inherit;
        overflow: auto;
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

    .musics {
        padding: 1rem;
    }

    .musics h3 {
        font-family: 'OpenSans';
        color: white;
    }

    .musics-grid {
        display: flex;
        flex-wrap: wrap;
        margin-top: 30px;
        gap: 20px;
    }
`

const Home: FC = () => {

    const { musics, search } = usePlayer()

    const renderMusics = () => {
        return musics.map(music => {
            return <Music key={music.id} music={music} />
        })
    }

    return (
        <Container>
            <Bar />
            <div className="home">
                <SideBar selected='home' />
                <div className="home-content">
                    <div className="top-bar">
                        <BackFoward />
                        <div className="search">
                            <input type="text" className="search-input" placeholder='Search a music'
                            onChange={e => search(e.target.value)} />
                            <FiSearch className='search-icon' />
                        </div>
                    </div>
                    <div className="musics">
                        <h3>Registered songs</h3>
                        <div className="musics-grid">
                            {renderMusics()}
                        </div>
                    </div>
                </div>
            </div>
            <Player />
        </Container>
    )
}

export default Home
