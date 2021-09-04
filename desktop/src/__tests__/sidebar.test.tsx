import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Sidebar from '../components/Sidebar'
import PlayerProvider from '../contexts/PlayerContext'

// [x] - the sidebar must be in the screen
// [x] - the sidebar must start with the home selected
// [x] - on clicking in queue section, a function "navigate" must throw 1x with "queue" param

describe('testing the sidebar component', () => {

    it('should render the sidebar and the app', () => {

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const navigate = jest.fn((screen: string) => {
            return
        })

        const { getByRole } = render((
            <PlayerProvider>
                <Sidebar selected='home' navigate={navigate} />
            </PlayerProvider>
        ))

        const SideBar = getByRole('sidebar')
        const HomeButton = getByRole('home-button')
        const QueueButton = getByRole('queue-button')

        expect(SideBar).toBeInTheDocument()
        expect(HomeButton).toHaveAttribute('class', 'option selected')
        expect(QueueButton).not.toHaveAttribute('class', 'option selected')

    })

    it('should render the sidebar and the app', () => {

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const navigate = jest.fn((screen: string) => {
            return
        })

        const { getByRole } = render((
            <PlayerProvider>
                <Sidebar selected='home' navigate={navigate} />
            </PlayerProvider>
        ))

        const QueueButton = getByRole('queue-button')

        fireEvent.click(QueueButton)

        expect(navigate).toBeCalledTimes(1)
        expect(navigate).toBeCalledWith('queue')

    })

})
