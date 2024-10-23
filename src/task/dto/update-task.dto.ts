import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Status } from '@prisma/client';
import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsString()
  @ApiProperty({
    type: String,
  })
  title: string;
  @IsString()
  @ApiProperty({
    type: String,
  })
  description?: string;
  @IsEnum(Status)
  @ApiProperty({
    type: String,
    enum: Status,
  })
  status?: Status;
}
