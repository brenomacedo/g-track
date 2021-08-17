import { Options } from '@mikro-orm/core'

const options: Options = {
    type: 'sqlite',
    entities: ['./src/entities/*.entity.ts'],
    dbName: '',
    password: '',
    user: '',
    migrations: {
        tableName: 'gtrack-migrations',
        path: './src/migrations',
        transactional: true
    }
}

export default options