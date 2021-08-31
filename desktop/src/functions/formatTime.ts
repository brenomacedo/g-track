const formatTime = (duration: number): string => {
    const minutes = Math.floor(duration / 60)
    const seconds = Math.floor(duration % 60)
    return `${minutes}:${`0${seconds}`.slice(-2)}`
}

export default formatTime
