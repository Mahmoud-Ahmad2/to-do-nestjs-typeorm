import { User } from './user.entity';
import { DATABASE_PROVIDE } from '../common/constant';
import { DataSource } from 'typeorm';

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(User);
    },
    inject: [DATABASE_PROVIDE],
  },
];
