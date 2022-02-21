import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class questions {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("varchar", { length: 255 })
    title: string;
  
    @Column("varchar", { length: 255 })
    anser: string;
  
}
  