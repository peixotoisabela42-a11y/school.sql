import { Course } from 'src/courses/entities/course.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Enrollment {
    @PrimaryGeneratedColumn()

    id: number;
    @Column()
    studentname: string;

    @Column()
    studentemail: string;

    @Column()
    studentCpf: string;
    @Column()
    phone: string;

    @Column()
    birthdate: string;

    @Column()
    createdAt: Date;

    
    @ManyToOne(() => Course, (course) => course.enrollments)
    @JoinColumn({ name: 'courseId' })
    course: Course;

}
