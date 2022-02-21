import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Documents} from '../../documents/entities/documents.entity';

export enum events_category { "C1",  "C2", "C3", "C4" }

@Entity()
export class Events {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  title: string;

  @Column("varchar", { length: 255 })
  desciption: string;

  @Column("bool")
  is_open : boolean;

  @Column("bool")
  is_active: boolean;

  @Column("int")
  places_nb: number;

  @Column("int")
  admin_id: number;

  @Column({
    type: "enum",
    enum: events_category
  })
  category: events_category;

  @Column("datetime")
  date: Date;

  @Column("datetime")
  created_at: Date;

  @OneToMany(() => Documents, document => document.id)
  documents: Documents[];
}
