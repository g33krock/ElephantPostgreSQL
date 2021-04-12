import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Schedule} from "./Schedule";

@Entity()
export class Courses extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

    @Column({
		nullable: true
	})
    @OneToMany(() => Schedule, schedule => schedule.courses)
	schedule: Schedule[];

    @Column({
		nullable: true
	})
	name: string;

    @Column({
		nullable: true
	})
	subject: number;

    @Column({
		nullable: true
	})
	grade: string;

    @Column({
		nullable: true
	})
	credit: string;
}