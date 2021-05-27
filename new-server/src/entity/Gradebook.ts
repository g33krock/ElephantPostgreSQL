import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Schedule } from "./Schedule";
import { Teacher } from "./Teacher";
import { Course } from "./Course";
import { Campus } from "./Campus";
import { Tracker } from "./Tracker";
import { Student } from "./Student";

@Entity()
export class Gradebook extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Schedule, schedule => schedule.gradebooks)
	schedules: Schedule;

    @ManyToOne(() => Teacher, teacher => teacher.gradebooks)
	teachers: Schedule;

    @ManyToOne(() => Student, student => student.gradebooks)
	students: Student;

    @ManyToOne(() => Course, course => course.gradebooks)
	courses: Course;

    @ManyToOne(() => Campus, campus => campus.gradebooks)
	campus: Campus;

	@Column({
		nullable: true
	})
	date: Date;

	@Column({
		nullable: true
	})
	pointsEarned: number;

	@Column({
		nullable: true
	})
	pointsAvailable: number;

}
