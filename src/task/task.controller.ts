import { CreateTaskDto } from './dto/create-task.dto';
import { TaskService } from './task.service';
import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { v1 as uuid } from 'uuid';


@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) { }

  // @Get()
  // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
  //   if(Object.keys(filterDto).length) {
  //     return this.taskService.getTasksWithFilters(filterDto)
  //   }
  // }

  // @Get()
  // getAllTask(): Task[] {
  //   return this.taskService.getAllTask();
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string) {
  //   return this.taskService.getTaskById(id);
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createTask(
  //   @Body() createTaskDto: CreateTaskDto
  // ): Task {
  //   return this.taskService.createTask(createTaskDto)
  // }

  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   this.taskService.deleteTask(id)
  // }

  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  //   ):Task{
  //   return this.taskService.updateTaskStatus(id,status);
  // }

}
