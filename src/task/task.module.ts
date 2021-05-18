import { TaskController } from './task.controller';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';

@Module({
  imports:[],
  controllers:[TaskController],
  providers: [TaskService]
})
export class TaskModule {}
