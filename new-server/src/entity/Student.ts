import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Schedule } from "./Schedule";
import { Guardian } from "./Guardian";
import { Campus } from "./Campus";

@Entity()
export class Student extends BaseEntity {
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

	@OneToMany(() => Schedule, schedule => schedule.student)
	schedules: Schedule[];

	@OneToMany(() => Guardian, guardian => guardian.student)
	guardians: Guardian[];

	@ManyToOne(() => Campus, campus => campus.students)
	campuses: Campus;
}
