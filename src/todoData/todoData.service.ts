import { todoData } from './todoData.entity';
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoDataService {
  constructor(
    @Inject('TODO_REPOSITORY')
    private readonly todoRepository: Repository<todoData>,
  ) {}

  async findAll(id: number): Promise<todoData[]> {
    return await this.todoRepository.find({ where: { userId: id } });
  }

  async insert(data: string, userId: number): Promise<any> {
    return await this.todoRepository.insert({ data, userId });
  }

  async update(id: number, data: string): Promise<any> {
    return await this.todoRepository.update(id, { data });
  }
  async delete(id: number): Promise<object> {
    return await this.todoRepository.delete(id);
  }
  async findOne(id: number): Promise<todoData> {
    return await this.todoRepository.findOneById(id);
  }
}
