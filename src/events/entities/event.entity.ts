export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desciption: string;

  @Column()
  is_open : boolean;

  @Column()
  is_active: boolean;

  @Column()
  places_nb: number;

  @Column()
  admin_id: number;

  @Column()
  category: string;

  @Column()
  date: Date;

  @Column()
  created_at: Date;
}
