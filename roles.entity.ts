
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class roles {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  emalabel: string;

}
