import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, OneToMany} from "typeorm";
import {Roles} from '../../roles/entities/roles.entity';
import { Registrations } from "../../registrations/entities/registrations.entity";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column("varchar", { length: 255 })
  email: string;
  
  @Column("varchar", { length: 255 })
  password: string;
  
  @Column("varchar", { length: 255 })
  first_name: string;
  
  @Column("varchar", { length: 255 })
  last_nam: string;
  
  @Column("datetime")
  date_of_birth: Date;
  
  @Column("int")
  role_id: number;
  
  @Column("timestamp")
  created_at: Date;
  
  @Column("bool")
  is_active: boolean;

  @ManyToOne(() => Roles, roles => roles.id)
  roles: Roles;

  @OneToMany(() => Registrations, registrations => registrations.user_id )
  registrations: Registrations[];
}
  