import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './task.model';
import { Injectable, NotFoundException } from '@nestjs/common';
import { v1 as uuid } from 'uuid'
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TaskService {
  // private tasks: Task[] = [];

  // getAllTask(): Task[] {
  //   return this.tasks;
  // }

  
  // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, search } = filterDto;
  //   let tasks = this.getAllTask();

  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }

  //   if (search) {
  //     tasks = tasks.filter(task =>
  //       task.title.includes(search) ||
  //       task.description.includes(search),
  //     );
  //   }

  //   return tasks;
  // }

  
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ID: ${id} not found`);
  //   }
  //   return found
  // }

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;

  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   }
  //   this.tasks.push(task)
  //   return task
  // }

  // deleteTask(id: string): void {
  //   this.tasks = this.tasks.filter(task => task.id !== id);
  // }

  // updateTaskStatus(id:string, status: TaskStatus) {
  //   const task = this.getTaskById(id);
  //   task.status= status;
  //   return task
  // }
}
