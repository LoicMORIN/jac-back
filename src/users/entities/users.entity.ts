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
  firstName: string;
  
  @Column("varchar", { length: 255 })
  lastName: string;
  
  @Column("datetime")
  date_of_birth: Date;
  
  @Column("int")
  roleId: number;
  
  @Column("timestamp")
  createdAt: Date;
  
  @Column("bool")
  isActive: boolean;

  @ManyToOne(() => Roles, roles => roles.id)
  roles: Roles;

  @OneToMany(() => Registrations, registrations => registrations.userId )
  registrations: Registrations[];
}
  