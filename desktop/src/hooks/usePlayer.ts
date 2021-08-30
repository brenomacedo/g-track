import { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const usePlayer = () => {
    return useContext(PlayerContext)
}

export default usePlayer
