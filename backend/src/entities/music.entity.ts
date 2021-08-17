import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core"
import { Author } from "./author.entity"
import { Game } from "./game.entity"

@Entity()
export class Music {

    @PrimaryKey()
    id: number

    @Property()
    name: string

    @Property()
    url: string

    @Property()
    image: string

    @ManyToOne(() => Author)
    author: Author

    @ManyToOne(() => Game)
    game: Game

}