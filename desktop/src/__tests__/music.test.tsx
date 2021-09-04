import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Music from '../components/Music'
import PlayerProvider from '../contexts/PlayerContext'
import faker from 'faker'

// [x] - the music component must be in the screen
// [x] - the music component must start with the menu closed
// [x] - on clicking in the Component, the menu should open
// [x] - on clicking in the Close button, the menu should close


describe('should test the music component', () => {

    it('should render the music component', () => {

        const music = {
            id: faker.datatype.number(),
            name: faker.random.words(),
            url: faker.internet.domainName(),
            image: faker.random.image(),
            game: {
                id: faker.datatype.number(),
                name: faker.random.words()
            },
            author: {
                id: faker.datatype.number(),
                name: faker.internet.userName()
            }
        }

        const { getByRole } = render((
            <PlayerProvider>
                <Music music={music} />
            </PlayerProvider>
        ))

        const MusicComponent = getByRole('container')
        const Menu = getByRole('menu')

        expect(MusicComponent).toBeInTheDocument()
        expect(Menu).toHaveStyle({ height: '0rem' })

    })

    it('on clicking in the component, the menu should appear', () => {

        const music = {
            id: faker.datatype.number(),
            name: faker.random.words(),
            url: faker.internet.domainName(),
            image: faker.random.image(),
            game: {
                id: faker.datatype.number(),
                name: faker.random.words()
            },
            author: {
                id: faker.datatype.number(),
                name: faker.internet.userName()
            }
        }

        const { getByRole } = render((
            <PlayerProvider>
                <Music music={music} />
            </PlayerProvider>
        ))

        const MusicComponent = getByRole('container')
        const Menu = getByRole('menu')
        const CloseButton = getByRole('close-button')

        fireEvent.click(MusicComponent)

        expect(Menu).not.toHaveStyle({ height: '0rem' })

        fireEvent.click(CloseButton)

        expect(Menu).toHaveStyle({ height: '0rem' })

    })

})
