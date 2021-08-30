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
    search: (search: string) => void
    addToQueue: (music: Music) => void
    playNow: (music: Music) => void
    removeCurrentMusic: () => void
}

const PlayerContext = createContext<PlayerContextProps>({} as never)

const PlayerProvider: FC = ({ children }) => {

    const [musics, setMusics] = useState<Music[]>([])
    const [playing, setPlaying] = useState<Music>()
    const [queue, setQueue] = useState<Music[]>([])

    useEffect(() => {
        api.get<Music[]>('/musics', { params: { search: '' } }).then(({ data }) => {
            setMusics(data)
        })
    }, [])

    const addToQueue = (music: Music) => {
        if(!playing) {
            setPlaying(music)
            return
        }

        setQueue([...queue, music])
    }

    const playNow = (music: Music) => {
        setPlaying(music)
    }

    const selectMusic = (music: Music) => {
        setPlaying(music)
    }

    const removeMusic = (qindex: number) => {
        setQueue(
            queue.filter((_, index) => index !== qindex)
        )
    }

    const removeCurrentMusic = () => {
        if(queue[0]) {
            setPlaying(queue[0])
            removeMusic(0)
            return
        }

        setPlaying(undefined)
    }

    const search = (search: string) => {
        api.get<Music[]>('/musics', { params: { search } }).then(({ data }) => {
            setMusics(data)
        })
    }

    return (
        <PlayerContext.Provider value={{
            musics, playing, selectMusic, search, addToQueue, playNow, removeCurrentMusic
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext }
export default PlayerProvider
