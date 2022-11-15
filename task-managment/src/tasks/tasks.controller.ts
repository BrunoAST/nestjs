import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { ITask } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): ITask[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): ITask {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string): ITask {
    return this.tasksService.getTaskById(id);
  }
}
