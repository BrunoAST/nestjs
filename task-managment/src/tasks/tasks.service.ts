import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { ITask, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [];

  getAllTasks(): ITask[] {
    return this.tasks;
  }

  createTask({ title, description }: CreateTaskDto): ITask {
    const task: ITask = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);

    return task;
  }

  getTaskById(id: string): ITask {
    return this.tasks.find((task) => task.id === id);
  }

  deleteTask(id: string): void {
    const itemToBeDeleted = this.tasks.findIndex((task) => task.id === id);

    this.tasks.splice(itemToBeDeleted, 1);
  }

  updateTaskStatus(id: string, status: TaskStatus): ITask {
    const taskToBeUpdated = this.tasks.findIndex((task) => task.id === id);

    this.tasks[taskToBeUpdated].status = status;

    return this.tasks[taskToBeUpdated];
  }
}
