import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Student } from "./Student";


@Entity()
export class Funding extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Student, student => student.funding)
	students: Student[];

	@Column({
		nullable: true
	})
	type: string;

	@Column({
		nullable: true
	})
	rate: number;
}