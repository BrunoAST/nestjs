import { MigrationInterface, QueryRunner } from 'typeorm';

export class Pessoa1728835929193 implements MigrationInterface {
  name = 'Pessoa1728835929193';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pessoa" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "nome" character varying(100) NOT NULL, "passwordHash" character varying(255) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_bb879ac36994545a5a917a09ba5" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pessoa"`);
  }
}
