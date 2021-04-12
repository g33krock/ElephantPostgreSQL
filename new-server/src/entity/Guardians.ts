import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany} from "typeorm";
import {Schedule} from "./Schedule";
import {Students} from "./Students";

@Entity()
export class Guardians extends BaseEntity {
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
	phone: number;

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

    @Column({
		nullable: true
	})
	@ManyToMany(() => Students, students => students.guardians)
	students: Students[];

}
