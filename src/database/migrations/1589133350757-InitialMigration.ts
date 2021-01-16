// import {MigrationInterface, QueryRunner} from "typeorm";

// export class InitialMigration1589133350757 implements MigrationInterface {
//     name = 'InitialMigration1589133350757'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(500) NOT NULL, "email" text NOT NULL, "phone" character varying(15) NOT NULL, "address" text NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e1b6b832312fe74c437fda142ef" PRIMARY KEY ("id"))`, undefined);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`DROP TABLE "users"`, undefined);
//     }
// }
