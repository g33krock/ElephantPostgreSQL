import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Schedule} from "../entity/Schedule";

@Entity()
export class Students extends BaseEntity {
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
	campus: string;

	@Column({
		nullable: true
	})
	profile_image: string;

	@Column({
		nullable: true
	})
	iep: boolean;

	@OneToMany(() => Schedule, schedule => schedule.students)
	schedule: Schedule[];
}
