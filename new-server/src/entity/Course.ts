import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Schedule } from "./Schedule";

@Entity()
export class Course extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Schedule, schedule => schedule.course)
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