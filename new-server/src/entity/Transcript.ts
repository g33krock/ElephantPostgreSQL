import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Schedule } from "./Schedule";
import { Teacher } from "./Teacher";
import { Course } from "./Course";
import { Campus } from "./Campus";
import { Student } from "./Student";

@Entity()
export class Transcript extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Student, student => student.transcripts)
    student: Student;

    @ManyToOne(() => Teacher, teacher => teacher.transcripts)
    teachers: Schedule;

    @ManyToOne(() => Course, course => course.transcripts)
    courses: Course;

    @ManyToOne(() => Schedule, schedule => schedule.transcripts)
    schedules: Schedule;

    @ManyToOne(() => Campus, campus => campus.transcripts)
    campus: Campus;

    @Column({
        nullable: true
    })
    grade: string;

    @Column({
        nullable: true
    })
    category: string;

    @Column({
        nullable: true
    })
    credit: number;

    @Column({
        nullable: true
    })
    civics: string;

}