import { Collection, Entity, OneToMany, PrimaryKey, Property } from "@mikro-orm/core";
import { Music } from "./music.entity";

@Entity()
export class Game {

    @PrimaryKey()
    id: number

    @Property()
    name: string

    @OneToMany(() => Music, b => b.game)
    music = new Collection<Music>(this)

}