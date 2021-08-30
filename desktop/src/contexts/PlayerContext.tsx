import React, { FC , createContext, useState, useEffect } from 'react'
import api from '../api'

type Author = {
    id: number
    name: string
}

type Game = {
    id: number
    name: string
}

type Music = {
    id: number
    name: string
    url: string
    image: string
    author: Author
    game: Game
}

type PlayerContextProps = {
    musics: Music[]
    playing: Music
    selectMusic: (music: Music) => void
}

const PlayerContext = createContext<PlayerContextProps>({} as never)

const PlayerProvider: FC = () => {

    const [musics, setMusics] = useState<Music[]>()
    const [playing, setPlaying] = useState<Music>()

    useEffect(() => {
        api.get<Music[]>('/musics').then(({ data }) => {
            setMusics(data)
        })
    }, [])

    const selectMusic = (music: Music) => {
        setPlaying(music)
    }

    return (
        <PlayerContext.Provider value={{
            musics, playing, selectMusic
        }}>

        </PlayerContext.Provider>
    )
}

export { PlayerContext }
export default PlayerProvider
