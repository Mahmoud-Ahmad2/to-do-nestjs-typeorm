import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('todoData')
export class todoData {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  userId: number;

  @Column()
  data: string;
}
