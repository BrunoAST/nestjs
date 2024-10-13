import { MigrationInterface, QueryRunner } from 'typeorm';

export class PessoaSetUniqueEmail1728837019902 implements MigrationInterface {
  name = 'PessoaSetUniqueEmail1728837019902';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pessoa" ADD CONSTRAINT "UQ_0cbe1fe975ff21cc7afc4e32788" UNIQUE ("email")`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "pessoa" DROP CONSTRAINT "UQ_0cbe1fe975ff21cc7afc4e32788"`,
    );
  }
}
