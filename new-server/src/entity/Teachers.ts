import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Schedule} from "./Schedule";
import {Roles} from "./Roles";
import {Campuses} from "./Campuses";

@Entity()
export class Teachers extends BaseEntity {
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

	// @Column({
	// 	nullable: true
	// })
	@OneToMany(() => Schedule, schedule => schedule.teachers)
	schedule: Schedule[];

	// @Column({
	// 	nullable: true
	// })
	@ManyToOne(() => Roles, roles => roles.teachers)
	roles: Roles;

	@ManyToOne(() => Campuses, campuses => campuses.teachers)
	campuses: Campuses;

}
