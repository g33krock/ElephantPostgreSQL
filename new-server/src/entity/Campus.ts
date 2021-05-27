import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Schedule } from "./Schedule";
import { School_Admin } from "./School_Admin";
import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Gradebook } from "./Gradebook";

@Entity()
export class Campus extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Schedule, schedule => schedule.campus)
	schedules: Schedule[];

	@ManyToOne(() => School_Admin, school_admin => school_admin.campus)
	school_admin: School_Admin;

	@OneToMany(() => Gradebook, gradebook => gradebook.campus)
	gradebooks: Gradebook[];

	@Column({
		nullable: true
	})
	name: string;

	@Column({
		nullable: true
	})
	phone_number: string;

	@Column({
		nullable: true
	})
	address: string;

	@OneToMany(() => Teacher, teacher => teacher.campus)
	teachers: Teacher[];

	@OneToMany(() => Student, student => student.campuses)
	students: Student[];
}