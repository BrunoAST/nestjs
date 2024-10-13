import { MigrationInterface, QueryRunner } from 'typeorm';

export class PessoaRecadoRelationship1728844244673
  implements MigrationInterface
{
  name = 'PessoaRecadoRelationship1728844244673';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "recado" DROP COLUMN "de"`);
    await queryRunner.query(`ALTER TABLE "recado" ADD "de" integer`);
    await queryRunner.query(`ALTER TABLE "recado" DROP COLUMN "para"`);
    await queryRunner.query(`ALTER TABLE "recado" ADD "para" integer`);
    await queryRunner.query(
      `ALTER TABLE "recado" ADD CONSTRAINT "FK_dcb2cc04cbb9a627e7248b15a33" FOREIGN KEY ("de") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "recado" ADD CONSTRAINT "FK_37eb0153b2ab735cdb665e3535a" FOREIGN KEY ("para") REFERENCES "pessoa"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "recado" DROP CONSTRAINT "FK_37eb0153b2ab735cdb665e3535a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "recado" DROP CONSTRAINT "FK_dcb2cc04cbb9a627e7248b15a33"`,
    );
    await queryRunner.query(`ALTER TABLE "recado" DROP COLUMN "para"`);
    await queryRunner.query(
      `ALTER TABLE "recado" ADD "para" character varying(50) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE "recado" DROP COLUMN "de"`);
    await queryRunner.query(
      `ALTER TABLE "recado" ADD "de" character varying(50) NOT NULL`,
    );
  }
}
