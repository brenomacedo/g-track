
import request from 'supertest'
import bootstrap from '../index'

describe('musics', () => {

    let context: any = {}

    beforeAll(async () => {
        context = await bootstrap()
    })

    afterAll(async () => {
        await context.DI.orm.close()
    })

    it('should search the musics', async () => {

        const response = await request(context.app).get('/musics')
        expect(response.statusCode).toBe(200)

    })

})