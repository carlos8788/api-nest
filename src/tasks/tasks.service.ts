import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

  private tasks = [
    {
      id: 1,
      title: 'first task',
      description: 'first task description',
    },
  ];

  getAllTasks() {
    return 0;
  }
  // createTask() { }
  // updateTask() { }
  // deleteTask() { }
}
