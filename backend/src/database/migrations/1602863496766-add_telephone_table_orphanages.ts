import {MigrationInterface, QueryRunner} from "typeorm";

export class addTelephoneTableOrphanages1602863496766 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('alter table "orphanages" add telephone int null')
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
