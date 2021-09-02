import React, { FC , createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify'
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
    queue: Music[]
    playing: Music
    selectMusic: (music: Music) => void
    search: (search: string) => void
    addToQueue: (music: Music) => void
    playNow: (music: Music) => void
    removeCurrentMusic: () => void
    removeMusic: (qindex: number) => void
    shuffle: () => void
    goBack: () => void
    goNext: () => void
}

const PlayerContext = createContext<PlayerContextProps>({} as never)

const PlayerProvider: FC = ({ children }) => {

    const [musics, setMusics] = useState<Music[]>([])
    const [playing, setPlaying] = useState<Music>()
    const [queue, setQueue] = useState<Music[]>([])
    const [history, setHistory] = useState<Music[]>([])

    const addToQueue = (music: Music) => {
        if(!playing) {
            setPlaying(music)
            return
        }

        setQueue([...queue, music])
    }

    const playNow = (music: Music) => {
        addToHistory(playing)
        setPlaying(music)
    }

    const selectMusic = (music: Music) => {
        setPlaying(music)
    }

    const removeMusic = (qindex: number) => {
        setQueue(
            queue.filter((_, index) => index !== qindex)
        )

        toast.success('Music removed from queue')
    }

    const removeCurrentMusic = () => {
        if(queue[0]) {
            addToHistory(playing)
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

    const shuffle = () => {
        const array = queue
        let currentIndex = array.length, randomIndex

        while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--

            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]]
        }


        setQueue([...array])
        toast.success('Queue shuffle')
    }

    const addToHistory = (music: Music) => {
        setHistory([music, ...history])
    }

    const goBack = () => {
        if(!history[0]) {
            return
        }

        setQueue([playing, ...queue])
        setPlaying(history[0])
        setHistory(
            history.filter((music, index) => index !== 0)
        )
    }

    const goNext = () => {
        if(!queue[0]) {
            return
        }

        removeCurrentMusic()
    }

    useEffect(() => {
        api.get<Music[]>('/musics', { params: { search: '' } }).then(({ data }) => {
            setMusics(data)
        })
    }, [])

    return (
        <PlayerContext.Provider value={{
            musics, playing, selectMusic, search, addToQueue,
            playNow, removeCurrentMusic, queue, removeMusic,
            shuffle, goBack, goNext
        }}>
            {children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext }
export default PlayerProvider
