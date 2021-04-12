import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Teachers} from "./Teachers";
import {School_Admins} from "./School_Admins";

@Entity()
export class Roles extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

    @Column({
		nullable: true
	})
    @OneToMany(() => Teachers, teachers => teachers.roles)
	teachers: Teachers[];

    @Column({
		nullable: true
	})
    @OneToMany(() => School_Admins, school_admins => school_admins.roles)
	school_admins: School_Admins[];

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