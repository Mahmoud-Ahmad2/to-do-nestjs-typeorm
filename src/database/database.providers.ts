import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
import { DATABASE_PROVIDE } from 'src/common/constant';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDE,
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'mongodb',
        host: configService.get('database').host,
        port: 27017,
        database: configService.get('database').database,
        useNewUrlParser: true,
        synchronize: true,
        entities: ['dist/**/*.entity{ .ts,.js}'],
      });

      return dataSource.initialize();
    },
    inject: [ConfigService],
  },
];
