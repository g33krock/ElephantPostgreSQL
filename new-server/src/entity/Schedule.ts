import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Student } from "./Student";
import { Teacher } from "./Teacher";
import { Course } from "./Course";
import { Campus } from "./Campus";
import { Tracker } from "./Tracker";

@Entity()
export class Schedule extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Student, student => student.schedules)
	student: Student;

	@ManyToOne(() => Course, course => course.schedules)
	course: Course;

	@ManyToOne(() => Teacher, teacher => teacher.schedules)
	teacher: Teacher;

	@ManyToOne(() => Campus, campus => campus.schedules)
	campus: Campus;

	@Column({
		nullable: true
	})
	link: string;

	@Column({
		nullable: true
	})
	para: string;

	@Column({
		nullable: true
	})
	period: number;

	@OneToMany(() => Tracker, tracker => tracker.schedules)
	trackers: Tracker[];
}
