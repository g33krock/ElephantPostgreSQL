import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Schedule } from "./Schedule";
import { Guardian } from "./Guardian";
import { Campus } from "./Campus";
import { Tracker } from "./Tracker";
import { Gradebook } from "./Gradebook";
import { Funding } from "./Funding";
import { InstructionMode } from "./InstructionMode";
import { SpedQuestion } from "./SpedQuestion";

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

	@OneToMany(() => Schedule, schedule => schedule.student, {onDelete: 'CASCADE'})
	schedules: Schedule[];

	@OneToMany(() => Guardian, guardian => guardian.student)
	guardians: Guardian[];

	@ManyToOne(() => Campus, campus => campus.students)
	campuses: Campus;

	@OneToMany(() => Tracker, tracker => tracker.students, {onDelete: 'CASCADE'})
	trackers: Tracker[];

	@OneToMany(() => Gradebook, gradebook => gradebook.students, {onDelete: 'CASCADE'})
	gradebooks: Gradebook[];

	@ManyToOne(() => Funding, funding => funding.students)
	funding: Funding;

	@ManyToOne(() => InstructionMode, instructionmode => instructionmode.students)
	instructionmode: InstructionMode;

	@ManyToOne(() => Guardian, guardian => guardian.students)
	guardian: Guardian;

	@OneToMany(() => SpedQuestion, spedQuestion => spedQuestion.student, {onDelete: 'CASCADE'})
	spedQuestions: SpedQuestion[];
}
