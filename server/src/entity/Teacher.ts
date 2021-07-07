import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Schedule } from "./Schedule";
import { Role } from "./Role";
import { Campus } from "./Campus";
import { Tracker } from "./Tracker";
import { Gradebook } from "./Gradebook";
import { Transcript } from "./Transcript";

@Entity()
export class Teacher extends BaseEntity {
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
	birthDate: string;

	@Column({
		nullable: true
	})
	image: string;

	@Column({
		nullable: true
	})
	email: string;

	@Column({
		nullable: true
	})
	link: string;

	@Column({
		nullable: true
	})
	phone: string;

	@Column({
		nullable: true
	})
	elementary: string;

	@Column({
		nullable: true
	})
	middle: string;

	@Column({
		nullable: true
	})
	highschoolMath: string;

	@Column({
		nullable: true
	})
	highschoolELA: string;

	@Column({
		nullable: true
	})
	highschoolHistory: string;

	@Column({
		nullable: true
	})
	highschoolScience: string;

	@Column({
		nullable: true
	})
	elective: string;

	@Column({
		nullable: true
	})
	p1: string;

	@Column({
		nullable: true
	})
	p2: string;

	@Column({
		nullable: true
	})
	p3: string;

	@Column({
		nullable: true
	})
	p4: string;

	@Column({
		nullable: true
	})
	p5: string;

	@Column({
		nullable: true
	})
	p6: string;

	@Column({
		nullable: true
	})
	p7: string;

	@Column({
		nullable: true
	})
	p8: string;

	@Column({
		nullable: true
	})
	p9: string;

	@Column({
		nullable: true
	})
	p10: string;

	@OneToMany(() => Schedule, schedule => schedule.teacher)
	schedules: Schedule[];

	@ManyToOne(() => Role, role => role.teachers)
	role: Role;

	@ManyToOne(() => Campus, campus => campus.teachers)
	campus: Campus;

	@OneToMany(() => Tracker, tracker => tracker.teachers)
	trackers: Tracker[];

	@OneToMany(() => Transcript, transcript => transcript.teachers)
	transcripts: Transcript[];

	@OneToMany(() => Gradebook, gradebook => gradebook.teachers)
	gradebooks: Gradebook[];
}
