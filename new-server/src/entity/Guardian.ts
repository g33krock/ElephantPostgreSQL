import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany } from "typeorm";
import { Schedule } from "./Schedule";
import { Student } from "./Student";

@Entity()
export class Guardian extends BaseEntity {
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
	phone: string;

	@Column({
		nullable: true
	})
	email: string;

	@Column({
		nullable: true
	})
	address: string;

	@Column({
		nullable: true
	})
	additional_info: string;

	@ManyToOne(() => Student, student => student.guardians)
	student: Student;
}
