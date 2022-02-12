
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  first_name: string;

  @Column()
  last_nam: string;

  @Column()
  date_of_birth: Date;

  @Column()
  role_id: number;

  @Column()
  created_at: Date;

  @Column()
  is_active: boolean;
}
