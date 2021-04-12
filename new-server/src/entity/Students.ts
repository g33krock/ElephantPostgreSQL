import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany} from "typeorm";
import {Schedule} from "../entity/Schedule";
import {Guardians} from "../entity/Guardians";

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
	campus: string;

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

	@Column({
		nullable: true
	})
	@OneToMany(() => Schedule, schedule => schedule.students)
	schedule: Schedule[];

	@Column({
		nullable: true
	})
	@ManyToMany(() => Guardians, guardians => guardians.students)
	guardians: Guardians[];
}
