import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Campuses} from "./Campuses";
import {Roles} from "./Roles";

@Entity()
export class School_Admins extends BaseEntity {
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
	@OneToMany(() => Campuses, campuses => campuses.school_admins)
	campuses: Campuses[];
	

	// @Column({
	// 	nullable: true
	// })
	@ManyToOne(() => Roles, roles => roles.school_admins)
	roles: Roles;

}
