import { MigrationInterface, QueryRunner } from 'typeorm';

export class Recado1728770734107 implements MigrationInterface {
  name = 'Recado1728770734107';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "recado" ("id" SERIAL NOT NULL, "texto" character varying(255) NOT NULL, "de" character varying(50) NOT NULL, "para" character varying(50) NOT NULL, "lido" boolean NOT NULL DEFAULT false, "data" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f60545f7289a677f98f820c0c33" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "recado"`);
  }
}
