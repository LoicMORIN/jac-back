
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class questions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  anser: string;

}
