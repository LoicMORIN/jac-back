import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {Events} from '../../events/entities/events.entity';

@Entity()
export class Documents {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("int")
    event_id: number;
  
    @Column("varchar", { length: 255 })
    title: string;
  
    @Column("varchar", { length: 255 })
    path: string;
  
}