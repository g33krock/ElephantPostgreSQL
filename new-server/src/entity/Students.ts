import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Schedule} from "../entity/Schedule";
import {Guardians} from "../entity/Guardians";
import { Campuses } from "./Campuses";

@Entity()
export class Students extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
		nullable: true
	})
	firstName: string;

	@Column({
		nullable: true
	})
	lastName: string;

	@Column({
		nullable: true
	})
	grade: number;

	@Column({
		nullable: true
	})
	profile_image: string;

	@Column({
		nullable: true
	})
	iep: boolean;

	@Column({
		nullable: true
	})
	medical_information: string;

	@Column({
		nullable: true
	})
	additional_information: string;

	@OneToMany(() => Schedule, schedule => schedule.students)
	schedule: Schedule[];

	@OneToMany(() => Guardians, guardians => guardians.students)
	guardians: Guardians[];

	@ManyToOne(() => Campuses, campuses => campuses.students)
	campuses: Campuses;
}
