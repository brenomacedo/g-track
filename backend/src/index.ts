import 'reflect-metadata'
import express from 'express'
import { EntityManager, MikroORM, RequestContext } from '@mikro-orm/core'
import options from '../mikro-orm.config'

const app = express()

export const DI = {} as {
    orm: MikroORM,
    em: EntityManager
}

async function bootstrap() {

    DI.orm = await MikroORM.init(options)

    DI.em = DI.orm.em

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use((req, res, next) => RequestContext.create(DI.orm.em, next))

    app.listen(3000)

}

bootstrap()