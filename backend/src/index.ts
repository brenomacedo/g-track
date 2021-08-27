import 'reflect-metadata'
import express from 'express'
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core'
import options from '../mikro-orm.config'
import { Music } from './entities/music.entity'
import router from './routes'
import path from 'path'

const app = express()

export const DI = {} as {
    orm: MikroORM,
    em: EntityManager,
    musicRepository: EntityRepository<Music>
}

async function bootstrap() {

    DI.orm = await MikroORM.init(options)

    DI.em = DI.orm.em
    DI.musicRepository = DI.orm.em.getRepository(Music)

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use((req, res, next) => RequestContext.create(DI.orm.em, next))
    app.use(router)
    app.use('/files' ,express.static(path.resolve(__dirname, 'static')))

    return { app, DI }

}

bootstrap()

export default bootstrap