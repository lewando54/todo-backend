import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Status } from '@prisma/client';
import { IsString, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    type: String,
  })
  description?: string;

  @IsOptional()
  @IsEnum(Status)
  @ApiProperty({
    type: String,
    enum: Status,
  })
  status?: Status;
}
