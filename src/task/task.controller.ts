import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Create a new task' })
  create(@Body(ValidationPipe) createTaskDto: CreateTaskDto) {
    return this.taskService.create(createTaskDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'List all tasks' })
  findAll() {
    return this.taskService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Get a task by id' })
  @ApiParam({ name: 'id', type: Number })
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Update a task by id' })
  @ApiParam({ name: 'id', type: Number })
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateTaskDto: UpdateTaskDto,
  ) {
    return this.taskService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Delete a task by id' })
  @ApiParam({ name: 'id', type: Number })
  remove(@Param('id') id: string) {
    return this.taskService.remove(+id);
  }
}
