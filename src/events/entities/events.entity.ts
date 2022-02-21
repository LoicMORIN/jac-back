import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {users} from '../../users/entities/users.entity';

export type events_category = "C1" | "C2" | "C3" | "C4"

@Entity()
export class events {
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
    enum: ["C1","C2","C3","C4"]
  })
  category: events_category;

  @Column("datetime")
  date: Date;

  @Column("datetime")
  created_at: Date;
}
