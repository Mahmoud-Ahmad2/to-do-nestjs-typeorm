import { Module } from '@nestjs/common';
import { todoProviders } from './todoData.providers';
import { TodoDataService } from './todoData.service';
import { TodoDataController } from './todoData.controller';
import { todoData } from './todoData.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TodoDataController],
  providers: [TodoDataService, ...todoProviders],
})
export class TodoDataModule {}
