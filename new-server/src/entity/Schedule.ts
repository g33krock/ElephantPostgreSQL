import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Students } from "./Students";

@Entity()
export class Schedule extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => Students, students => students.schedule)
	students: Students;

	@Column({
		nullable: true
	})
	subject: string;

	@Column({
		nullable: true
	})
	teacher: string;

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
