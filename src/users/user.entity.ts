import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

@Entity('User')
export class User {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
