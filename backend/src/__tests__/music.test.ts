
import request from 'supertest'
import bootstrap from '../index'

describe('musics', () => {

    it('should search the musics', async () => {

        const { DI, app } = await bootstrap()

        request(app)
            .get('/musics')
            .expect(200)
            .end()

        await DI.orm.close()

    })

})