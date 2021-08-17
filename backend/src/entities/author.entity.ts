import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core"
import { Music } from "./music.entity"

@Entity()
export class Author {

    @PrimaryKey()
    id: number

    @Property()
    name: string

    @OneToMany(() => Music, b => b.author)
    music = new Collection<Music>(this)

}