import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";
import { Campus } from "./Campus";
import { Role } from "./Role";

@Entity()
export class School_Admin extends BaseEntity {
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

	@OneToMany(() => Campus, campus => campus.school_admin)
	campus: Campus[];

	@ManyToOne(() => Role, role => role.school_admin)
	role: Role;
}
