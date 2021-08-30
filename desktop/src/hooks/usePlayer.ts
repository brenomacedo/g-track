import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

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
}

const usePlayer = (): PlayerContextProps => {
    return useContext(PlayerContext)
}

export default usePlayer
