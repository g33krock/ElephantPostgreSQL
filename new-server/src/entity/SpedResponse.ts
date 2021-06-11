import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { SpedQuestion } from "./SpedQuestion";
import { Student } from "./Student";


@Entity()
export class SpedResponse extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Student, student => student.spedQuestions, {onDelete: 'CASCADE'})
	students: Student;

    @ManyToOne(() => SpedQuestion, spedQuestion => spedQuestion.spedResponses, {onDelete: 'CASCADE'})
	spedQuestions: SpedQuestion;

	@Column({
		nullable: true
	})
	date: string;

	@Column({
		nullable: true
	})
	question: string;

    @Column({
		nullable: true
	})
	response: string;
}