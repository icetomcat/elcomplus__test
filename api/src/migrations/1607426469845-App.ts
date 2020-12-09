import { MigrationInterface, QueryRunner } from 'typeorm'

export class App1607426469845 implements MigrationInterface {
  name = 'App1607426469845'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "car" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "brand" character varying NOT NULL, "number" character varying NOT NULL, CONSTRAINT "UQ_00a86ae1de5d648bcb106bbe4ce" UNIQUE ("number"), CONSTRAINT "PK_55bbdeb14e0b1d7ab417d11ee6d" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "gas_station" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "UQ_a62ae9600ea06ba99370188e922" UNIQUE ("address"), CONSTRAINT "PK_c97040c02e283d9b373768c4c77" PRIMARY KEY ("id"))')
    await queryRunner.query('CREATE TABLE "refill" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "quantity" numeric(5,2) NOT NULL DEFAULT 0, "carId" uuid NOT NULL, "stationId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fd649cbd52bdc8e2f6b90877e16" PRIMARY KEY ("id"))')
    await queryRunner.query('ALTER TABLE "refill" ADD CONSTRAINT "FK_13c3721265239a23f25d8dce180" FOREIGN KEY ("carId") REFERENCES "car"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    await queryRunner.query('ALTER TABLE "refill" ADD CONSTRAINT "FK_cc45947e8673d4ac7838c444c2d" FOREIGN KEY ("stationId") REFERENCES "gas_station"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "refill" DROP CONSTRAINT "FK_cc45947e8673d4ac7838c444c2d"')
    await queryRunner.query('ALTER TABLE "refill" DROP CONSTRAINT "FK_13c3721265239a23f25d8dce180"')
    await queryRunner.query('DROP TABLE "refill"')
    await queryRunner.query('DROP TABLE "gas_station"')
    await queryRunner.query('DROP TABLE "car"')
  }
}
