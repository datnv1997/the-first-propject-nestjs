import { TaskService } from './task/task.service';
import { Module } from '@nestjs/common';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './task/task.repository';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    TaskModule, 
    TypeOrmModule.forRoot(typeOrmConfig)
  ],
  // controllers: [TaskController],
  // providers: [TaskService],
})
export class AppModule {}
