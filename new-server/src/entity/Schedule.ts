import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Students } from "./Students";
import { Teachers } from "./Teachers";
import {Courses} from "./Courses";
import {Campuses} from "./Campuses";
import {School_Admins} from "./School_Admins";

@Entity()
export class Schedule extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	// @Column({
	// 	nullable: true
	// })
	@ManyToOne(() => Students, students => students.schedule)
	students: Students;

	// @Column({
	// 	nullable: true
	// })
	@ManyToOne(() => Courses, courses => courses.schedule)
	courses: Courses;

	// @Column({
	// 	nullable: true
	// })
	@ManyToOne(() => Teachers, teachers => teachers.schedule)
	teachers: Teachers;

	// @Column({
	// 	nullable: true
	// })
	@ManyToOne(() => Campuses, campuses => campuses.schedule)
	campuses: Campuses;

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
}
