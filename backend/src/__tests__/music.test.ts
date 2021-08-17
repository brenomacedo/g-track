jest.useFakeTimers()
import request from 'supertest'
import app from '../index'

describe('musics', () => {

    it('should search the musics', () => {

        request(app)
            .get('/musics')
            .expect(200)
            .end()

    })

})