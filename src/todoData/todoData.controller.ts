import {
  Body,
  Controller,
  Get,
  HttpException,
  Post,
  UseGuards,
  Request,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '../common/guard/todoData.guard';
import { TodoDataService } from './todoData.service';

@Controller('todoData')
@UseGuards(AuthGuard)
export class TodoDataController {
  constructor(private readonly todoDataService: TodoDataService) {}

  @Get()
  async findAll(@Request() req): Promise<any> {
    const { userId } = req;
    return await this.todoDataService.findAll(userId);
  }

  @Post()
  async insert(@Body() data: any, @Request() req): Promise<any> {
    const { userId } = req;
    const { data: todoData } = data;
    return await this.todoDataService.insert(todoData, userId);
  }

  @Patch('/:id')
  async update(@Body() data: any, @Param() params): Promise<any> {
    const { id } = params;
    if (!id) {
      throw new HttpException('Id is required', 400);
    }
    const { data: todoData } = data;
    return await this.todoDataService.update(id, todoData);
  }

  @Delete('/:id')
  async delete(@Param() params): Promise<object> {
    const { id } = params;
    if (!id) {
      throw new HttpException('Id is required', 400);
    }

    const data = await this.todoDataService.findOne(id);
    if (!data) {
      throw new HttpException('TodoData not found', 404);
    }
    return await this.todoDataService.delete(id);
  }
}
