import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Teacher } from "./Teacher";
import { School_Admin } from "./School_Admin";

@Entity()
export class Role extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@OneToMany(() => Teacher, teacher => teacher.role)
	teachers: Teacher[];

	@OneToMany(() => School_Admin, school_admin => school_admin.role)
	school_admin: School_Admin[];

	@Column({
		nullable: true
	})
	name: string;

	@Column({
		nullable: true
	})
	salary: boolean;

	@Column({
		nullable: true
	})
	pay_rate: number;
}