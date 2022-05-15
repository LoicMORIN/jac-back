import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Events} from "../../events/entities/events.entity"

@Entity()
export class Categories {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("varchar", { length: 255 })
    title: string;

    @ManyToOne(() => Events, (event) => event.category)
    documents: Events[]
}