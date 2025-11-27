import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Course {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    course: string;
    @Column()
    value: number;
    @Column()
    description: string;
    enrollments: any;

    @OneToMany (() => Course, (course) => course.enrollments)
    @JoinColumn({ name: 'courseId' })
    courses: Course[]; 
}


