import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TaskService } from './task.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { v1 as uuid } from 'uuid';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  @Get()
  getAllTask(): Task[] {
    return this.taskService.getAllTask();
  }

  @Get('/:id')
  getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(
    @Body() createTaskDto: CreateTaskDto
  ): Task {
    return this.taskService.createTask(createTaskDto)
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id)
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
    ):Task{
    return this.taskService.updateTaskStatus(id,status);
  }

}
