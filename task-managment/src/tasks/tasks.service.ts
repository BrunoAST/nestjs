import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
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
    const found = this.tasks.find((task) => task.id === id);

    if (!found) {
      throw new NotFoundException();
    }

    return found;
  }

  deleteTask(id: string): void {
    const itemToBeDeleted = this.tasks.findIndex((task) => task.id === id);

    if (itemToBeDeleted < 0) {
      throw new NotFoundException();
    }

    this.tasks.splice(itemToBeDeleted, 1);
  }

  updateTaskStatus(id: string, status: TaskStatus): ITask {
    const taskToBeUpdated = this.tasks.findIndex((task) => task.id === id);

    this.tasks[taskToBeUpdated].status = status;

    return this.tasks[taskToBeUpdated];
  }

  searchTasks({ status, search }: GetTasksFilterDto): ITask[] {
    let tasks = this.getAllTasks();

    if (status) {
      tasks = tasks.filter((task) => task.status === status.toUpperCase());
    }

    if (search) {
      tasks = tasks.filter(
        (task) =>
          task.description.toLowerCase().includes(search.toLowerCase()) ||
          task.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return tasks;
  }
}
