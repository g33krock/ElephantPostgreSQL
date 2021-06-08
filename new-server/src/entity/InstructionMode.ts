import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Student } from "./Student";


@Entity()
export class InstructionMode extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Student, student => student.instructionmode)
	students: Student[];

	@Column({
		nullable: true
	})
	type: string;
}