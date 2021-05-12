import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Schedule } from "./Schedule";
import { Role } from "./Role";
import { Campus } from "./Campus";
import { Tracker } from "./Tracker";

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
	image: string;

	@Column({
		nullable: true
	})
	email: string;

	@Column({
		nullable: true
	})
	link: string;

	@OneToMany(() => Schedule, schedule => schedule.teacher)
	schedules: Schedule[];

	@ManyToOne(() => Role, role => role.teachers)
	role: Role;

	@ManyToOne(() => Campus, campus => campus.teachers)
	campus: Campus;

	@OneToMany(() => Tracker, tracker => tracker.teachers)
	trackers: Tracker[];
}
