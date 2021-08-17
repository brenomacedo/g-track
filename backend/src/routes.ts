import { Router } from 'express'
import { MusicController } from './controllers/MusicController'

const router = Router()

router.get('/musics', MusicController.getMusics)

export default router