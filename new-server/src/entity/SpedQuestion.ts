import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { SpedResponse } from "./SpedResponse";
import { Student } from "./Student";


@Entity()
export class SpedQuestion extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Student, student => student.spedQuestions, {onDelete: 'CASCADE'})
	student: Student;

	@OneToMany(() => SpedResponse, spedResponse => spedResponse.spedQuestions)
	spedResponses: Student[];

	@Column({
		nullable: true
	})
	date: string;

	@Column({
		nullable: true
	})
	category: string;

	@Column({
		nullable: true
	})
	question: string;
}