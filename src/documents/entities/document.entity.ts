export class documents {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    event_id: number;
  
    @Column()
    title: string;
  
    @Column()
    path: string;
  
}