import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {users} from '../../users/entities/users.entity';
import {events} from '../../events/entities/events.entity'; 


@Entity()
export class registrations {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column("int")
    user_id: number;
  
    @Column("int")
    event_id: number;

    @ManyToOne(type => users, user_id => user.registrations)
    user_id: users.id;
  }
  