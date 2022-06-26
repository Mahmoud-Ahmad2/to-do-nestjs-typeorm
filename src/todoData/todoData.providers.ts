import { todoData } from './todoData.entity';
import { TODO_REPOSITORY } from '../common/constant';
import { DataSource } from 'typeorm';
import { DATABASE_PROVIDE } from '../common/constant';

export const todoProviders = [
  {
    provide: TODO_REPOSITORY,
    useFactory: (dataSource: DataSource) => {
      return dataSource.getRepository(todoData);
    },
    inject: [DATABASE_PROVIDE],
  },
];
