import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from "typeorm";
import {Documents} from '../../documents/entities/documents.entity';
import {Users} from '../../users/entities/users.entity';
import {Registrations} from "src/registrations/entities/registrations.entity";
import {Categories} from '../../categories/entities/category.entity';

export enum events_category { 
  C1 = "C1",  
  C2 = "C2", 
  C3 = "C3", 
  C4 = "C4" }

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("varchar", { length: 255 })
  desciption: string;

  @Column("bool")
  isOpen : boolean;

  @Column("bool")
  isActive: boolean;

  @Column("int")
  placesNb: number;

  @Column("int")
  adminId: number;

  @Column({
    type: "set",
    enum: events_category
  })
  category: events_category;

  @Column("datetime")
  date: Date;

  @Column("datetime")
  createdAt: Date;

  @ManyToOne(() => Documents, (document) => document.event)
  documents: Documents[]
  
  @OneToMany(() => Users, users => users.id)
  users: Users[]; 

  @OneToMany(() => Registrations, registration => registration.event)
  public registrations!: Registrations[];

}
