import formatTime from "../functions/formatTime"

describe('testing the format date function', () => {

    it('should return an formated string based on seconds given', () => {
        let time = 60
        let formattedTime = formatTime(time)

        expect(formattedTime).toBe('1:00')

        time = 90
        formattedTime = formatTime(time)

        expect(formattedTime).toBe('1:30')

        time = 125
        formattedTime = formatTime(time)

        expect(formattedTime).toBe('2:05')

        time = 123
        formattedTime = formatTime(time)

        expect(formattedTime).toBe('2:03')

        time = 532
        formattedTime = formatTime(time)

        expect(formattedTime).toBe('8:52')

        time = 982
        formattedTime = formatTime(time)

        expect(formattedTime).toBe('16:22')

        time = 1591
        formattedTime = formatTime(time)

        expect(formattedTime).toBe('26:31')
    })

})
