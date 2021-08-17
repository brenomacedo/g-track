import { Request, Response } from 'express'
import { DI } from '../index'

export class MusicController {

    static async getMusics(req: Request, res: Response) {

        const { search } = req.query
        
        const musics = await DI.musicRepository.find({
            $or: [
                {
                    name: {
                        $ilike: `%${search}%`
                    }
                }
            ]
        }, ['author', 'game'])

        return res.status(200).json(musics)

    }

}