import { TaskService } from './task/task.service';
import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TaskRepository } from './task/task.repository';

@Module({
  imports: [
    TaskModule, 
    TypeOrmModule.forFeature([TaskRepository])
  ],
  // controllers: [TaskController],
  // providers: [TaskService],
})
export class AppModule {}
