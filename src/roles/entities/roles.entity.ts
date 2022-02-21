import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class roles {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("role_labels")
    label: string;
  
}