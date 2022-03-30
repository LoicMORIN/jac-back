import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";


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
  
}