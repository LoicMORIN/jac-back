import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Users} from '../../users/entities/users.entity';
import {Events} from '../../events/entities/events.entity'; 


@Entity()
export class Registrations {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    public user_id!: number;

    @Column()
    public event_id!: number;

    @ManyToOne(() => Users, users => users.id)
    public user!: Users;

    @ManyToOne(() => Events, events => events.id)
    public event!: Events;
  }
  