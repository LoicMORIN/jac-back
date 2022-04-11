import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import { Events } from "src/events/entities/events.entity";

@Entity()
export class Documents {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("int")
    eventId: number;
  
    @Column("varchar", { length: 255 })
    title: string;
  
    @Column("varchar", { length: 255 })
    path: string;

    @ManyToOne(() => Events, (events) => events.documents)
    event: Events
}