import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import {Users} from '../../users/entities/users.entity';
import {Events} from '../../events/entities/events.entity'; 


@Entity()
export class Registrations {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    public userId!: number;

    @Column()
    public eventId!: number;

    @ManyToOne(() => Users, users => users.id)
    public user!: Users;

    @ManyToOne(() => Events, events => events.id)
    public event!: Events;
  }
  