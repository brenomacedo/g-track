import { Migration } from '@mikro-orm/migrations';

export class Migration20210817110809 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "game" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('create table "author" ("id" serial primary key, "name" varchar(255) not null);');

    this.addSql('create table "music" ("id" serial primary key, "name" varchar(255) not null, "url" varchar(255) not null, "image" varchar(255) not null, "author_id" int4 not null, "game_id" int4 not null);');

    this.addSql('alter table "music" add constraint "music_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade;');
    this.addSql('alter table "music" add constraint "music_game_id_foreign" foreign key ("game_id") references "game" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('drop table music')
    this.addSql('drop table author')
    this.addSql('drop table game')
  }

}
