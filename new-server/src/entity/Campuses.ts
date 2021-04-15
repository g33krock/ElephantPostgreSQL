import {BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";
import {Schedule} from "../entity/Schedule";
import {School_Admins} from "../entity/School_Admins";
import {Teachers} from "../entity/Teachers";
import { Students } from "./Students";

@Entity()
export class Campuses extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

    // @Column({
	// 	nullable: true
	// })
    @OneToMany(() => Schedule, schedule => schedule.campuses)
	schedule: Schedule[];

    // @Column({
	// 	nullable: true
	// })
    @ManyToOne(() => School_Admins, school_admins => school_admins.campuses)
	school_admins: School_Admins;

    @Column({
		nullable: true
	})
	name: string;

    @Column({
		nullable: true
	})
	phone_number: string;

    @Column({
		nullable: true
	})
	address: string;

    @OneToMany(() => Teachers, teachers => teachers.campuses)
	teachers: Teachers[];

    @OneToMany(() => Students, students => students.campuses)
	students: Students[];
}