 

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('employee') 
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  useremail: string;  

  @Column()
  password: string;  
 
}